# -*- coding: utf-8 -*-
# ╔══════════════════════════════════════════════════════════════════╗
# ║              CONTENT.PY — Solo edita este archivo                 ║
# ║   Después de cambiar algo, corre:   python build.py               ║
# ╚══════════════════════════════════════════════════════════════════╝
#
# Colores disponibles (usa el nombre, no el código):
#   cian · verde · ambar · morado · azul
COLORES = {
    "cian":   "#33c9d6",
    "verde":  "#4fd6a0",
    "ambar":  "#f5b94d",
    "morado": "#c79bff",
    "azul":   "#5fb0ff",
}

# ── SITIO ─────────────────────────────────────────────────────────────
TITULO_PESTANA = "Aperture · Semillero de Data Science e IA"
GITHUB         = "https://github.com/JeroHoyos/aperture"

# ── HERO (lo primero que se ve) ───────────────────────────────────────
# Puedes usar HTML básico: <br> para salto de línea, <span> para color.
HERO_TITULO = 'SEMILLERO DE<br><span style="color:#29c5d6;">DATA SCIENCE E IA</span>'
HERO_TEXTO  = ('<span style="color:#1f8fa0;">//</span> Aplicamos '
               '<span style="color:#29c5d6;">modelos que predicen y deciden</span> '
               'en problemas reales. Los fundamentos son el punto de partida, no el destino.')

# Etiquetas (chips) bajo el título: (texto, color)
CHIPS = [
    ("Data Science",                "cian"),
    ("Machine Learning",            "verde"),
    ("IA & LLMs",                   "ambar"),
    ("High Performance Computing",  "morado"),
]

# ── SOBRE APERTURE ────────────────────────────────────────────────────
SOBRE = ('<strong style="color:#29c5d6;">Aperture</strong> es una comunidad estudiantil '
         'construida en torno al <strong style="color:#29c5d6;">Data Science y la IA</strong>. '
         'Convertimos la teoría en proyectos de valor, aportamos a la innovación y aprendemos '
         'a escalarlos hasta que funcionen de verdad en el mundo real.')

# Frase del recuadro "lab.live"
LAB_FRASE = "No solo estudiamos la IA. La construimos y la llevamos a la realidad."

# ── CONTACTO ──────────────────────────────────────────────────────────
CONTACTO_TITULO = "CONTACTO"
CONTACTO_TEXTO  = "¿Te suena? Súmate al semillero o escríbenos por cualquiera de estos canales."

# Canales: (etiqueta, lo_que_se_muestra, enlace, símbolo, color)
REDES = [
    ("Instagram", "@aperture.systems",               "https://instagram.com/aperture.systems",                       "[o]", "morado"),
    ("Correo",    "aperture.systems.lab@gmail.com",   "mailto:aperture.systems.lab@gmail.com",                        "@",   "cian"),
    ("WhatsApp",  "Únete al grupo",                   "https://chat.whatsapp.com/Bi83DY3f9tDCSMHDUqyHDM?s=cl&p=a&ilr=4&amv=2", "#", "verde"),
]

# ── PANTALLA DE ARRANQUE (boot) ───────────────────────────────────────
# (etiqueta, valor)  ·  la última se resalta en cian
BOOT = [
    ("SYSTEM",  "APERTURE OS v1.0"),
    ("ENFOQUE", "DATA SCIENCE & IA"),
    ("MODO",    "SEMILLERO DE INVESTIGACION"),
    ("LINEAS",  "DATA · ML · IA · LLMs"),
    ("ACCESO",  "CONCEDIDO"),
]

# ── BITÁCORA ──────────────────────────────────────────────────────────
# La más reciente va primero. Campos opcionales: "link" y "chart".
BITACORA = [
    {
        "tag": "INSTAGRAM",
        "fecha": "2026-06-25",
        "titulo": "Ya estamos en Instagram",
        "texto": "Aperture abre su Instagram oficial: @aperture.systems. Síguenos para enterarte de charlas, sesiones y novedades del semillero.",
        "color": "morado",
        "link": {"url": "https://www.instagram.com/aperture.systems/", "texto": "abrir Instagram"},
    },
    {
        "tag": "ENCUESTA",
        "fecha": "2026-06-25",
        "titulo": "Temas de interés para las charlas",
        "texto": "Resultado de la consulta a la comunidad · 53 respuestas · selección múltiple.",
        "color": "cian",
        # Gráfico de barras: (tema, votos, porcentaje)
        "chart": [
            ("Cómo funcionan las redes neuronales", 30, 57),
            ("Cómo hacer sistemas de agentes de IA", 29, 55),
            ("Introducción a la minería de datos",   26, 49),
            ("ML en producción",                     21, 40),
            ("Arquitectura transformer",             19, 36),
            ("Data Science en Medicina",             19, 36),
            ("Data Science con fútbol",              17, 32),
            ("Cómo usar OpenClaw",                   16, 30),
            ("Cómo hacer un RAG",                    15, 28),
            ("Data Science con Astronomía",          14, 26),
            ("Data Science con F1 (fórmula 1)",      13, 25),
            ("Introducción a GPU programming (CUDA)", 13, 25),
            ("Análisis Topológico de Datos",         10, 19),
            ("Cómo hacer un motor gráfico",          10, 19),
        ],
    },
    {
        "tag": "SITE",
        "fecha": "2026-06-24",
        "titulo": "Nueva web de Aperture",
        "texto": "Estrenamos el sitio del semillero con su bitácora y sus canales de contacto. Hecho por y para la comunidad.",
        "color": "ambar",
    },
]
