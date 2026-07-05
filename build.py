# -*- coding: utf-8 -*-
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

import content as C  # noqa: E402

# Glow (resplandor) por color, para el hover de las tarjetas.
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


def build_news():
    out = []
    for i, n in enumerate(C.BITACORA):
        accent = hexof(n.get("color", "cian"))
        entry = {
            "tag": n["tag"],
            "date": n["fecha"],
            "title": n["titulo"],
            "text": n["texto"],
            "accent": accent,
            "meta": n.get("meta", f"commit #{len(C.BITACORA) - i:03d} · main"),
        }
        if n.get("link"):
            entry["link"] = {"url": n["link"]["url"], "label": n["link"].get("texto", "abrir")}
        if n.get("chart"):
            entry["chart"] = [{"label": t, "count": c, "pct": p} for (t, c, p) in n["chart"]]
        out.append(entry)
    return out


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
        },
        "githubUrl": C.GITHUB,
        "bootRows": [
            {"label": l, "value": v, **({"accent": True} if i == len(C.BOOT) - 1 else {})}
            for i, (l, v) in enumerate(C.BOOT)
        ],
        "news": build_news(),
        "socials": [
            {"label": lbl, "handle": h, "url": u, "glyph": g,
             "accent": hexof(col), "glow": glowof(col)}
            for (lbl, h, u, g, col) in C.REDES
        ],
    }


def main():
    data = build_data()
    body = json.dumps(data, ensure_ascii=False, indent=2)
    header = (
        "/* ============================================================\n"
        "   Aperture · Contenido del sitio (GENERADO)\n"
        "   ------------------------------------------------------------\n"
        "   NO edites este archivo a mano: se genera desde content.py\n"
        "   con  python build.py\n"
        "   ============================================================ */\n\n"
    )
    out = ROOT / "js" / "data.js"
    out.write_text(header + "window.APERTURE_DATA = " + body + ";\n", encoding="utf-8")
    print(f"OK · generado {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
