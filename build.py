"""
BUILD.PY — Genera js/data.js a partir de content.py

No edites js/data.js a mano. Edita content.py y luego corre:

    python build.py
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))

import content as C

GLOWS = {
    "#33c9d6": "rgba(51,201,214,0.32)",
    "#4fd6a0": "rgba(79,214,160,0.32)",
    "#f5b94d": "rgba(245,185,77,0.3)",
    "#c79bff": "rgba(199,155,255,0.3)",
    "#5fb0ff": "rgba(95,176,255,0.3)",
}

def hexof(color):
    """Acepta un nombre de COLORES o un código hex directo."""
    return C.COLORES.get(color, color)

def glowof(color):
    h = hexof(color)
    return GLOWS.get(h, "rgba(41,197,214,0.3)")

def build_lines():
    out = []
    for l in C.LINEAS:
        color = l.get("color", "cian")
        out.append({
            "key": l["clave"],
            "accent": hexof(color),
            "glow": glowof(color),
            "name": l["nombre"],
            "summary": l["resumen"],
            "alias": l["alias"],
            "title": l["titulo"],
            "essence": l["esencia"],
            "topics": [{"name": n, "dgm": d} for (n, d) in l["temas"]],
        })
    return out

def build_calendar():
    return {
        "title": C.CALENDARIO_TITULO,
        "text": C.CALENDARIO_TEXTO,
        "start": C.CLASES_INICIO,
        "end": C.CLASES_FIN,
        "meetingWeekday": C.REUNION_DIA,
        "meetingTitle": C.REUNION_TITULO,
        "meetingNote": C.REUNION_NOTA,
        "meetings": {
            f: {"title": t, "text": x} for f, (t, x) in C.REUNIONES.items()
        },
        "milestones": {
            f: {"label": lbl, "accent": hexof(col)} for f, (lbl, col) in C.HITOS.items()
        },
    }

def build_data():
    return {
        "site": {
            "title": C.TITULO_PESTANA,
            "heroTitle": C.HERO_TITULO,
            "heroText": C.HERO_TEXTO,
            "chips": [{"text": t, "color": hexof(c)} for (t, c) in C.CHIPS],
            "about": C.SOBRE,
            "labPhrase": C.LAB_FRASE,
            "contactTitle": C.CONTACTO_TITULO,
            "contactText": C.CONTACTO_TEXTO,
            "linesTitle": C.LINEAS_TITULO,
            "linesText": C.LINEAS_TEXTO,
            "accessTitle": C.ACCESO_TITULO,
            "accessPhrase": C.ACCESO_FRASE,
        },
        "access": [
            {"num": n, "title": t, "text": x, "accent": hexof(c), "glow": glowof(c)}
            for (n, t, x, c) in C.ACCESO_PUNTOS
        ],
        "bootRows": [
            {"label": l, "value": v, **({"accent": True} if i == len(C.BOOT) - 1 else {})}
            for i, (l, v) in enumerate(C.BOOT)
        ],
        "lines": build_lines(),
        "calendar": build_calendar(),
        "socials": [
            {"label": lbl, "handle": h, "url": u, "glyph": g,
             "accent": hexof(col), "glow": glowof(col)}
            for (lbl, h, u, g, col) in C.REDES
        ],
    }

def main():
    data = build_data()
    body = json.dumps(data, ensure_ascii=False, indent=2)
    out = ROOT / "js" / "data.js"
    out.write_text("window.APERTURE_DATA = " + body + ";\n", encoding="utf-8")
    print(f"OK · generado {out.relative_to(ROOT)}")

if __name__ == "__main__":
    main()
