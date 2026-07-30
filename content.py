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
GITHUB         = "https://github.com/aperture-systems-lab"

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

# ── ANTES DE LAS LÍNEAS: cómo se entra ────────────────────────────────
# Lo que no estaba en la web y sí en el perfil del semillero: que no hace
# falta traer nada aprendido para entrar.
ACCESO_TITULO = "SIN REQUISITOS PREVIOS"
ACCESO_FRASE  = "Lo único que pedimos son ganas de aprender y de construir."

# (número, título, texto, color)
ACCESO_PUNTOS = [
    ("01", "Se entra sin saber",
     "No hace falta llegar sabiendo. La idea es aprender lo que no sepas, con la guía "
     "de los demás miembros del semillero.",
     "cian"),
    ("02", "Se aprende construyendo",
     "Fomentamos los proyectos, las competencias y todo lo práctico, porque se aprende haciendo.",
     "verde"),
    # El día concreto no se nombra aquí; sale del calendario (REUNION_DIA).
    ("03", "Reuniones semanales",
     "Cada semana nos vemos presencialmente en la Facultad de Minas para aprender juntos. "
     "El calendario está más abajo.",
     "ambar"),
]

# ── LÍNEAS DE ESTUDIO ─────────────────────────────────────────────────
# Los tres frentes de trabajo del semillero. Cada uno se pinta con su propia
# animación (la elige "clave": ds · ia · hpc) y abre una ficha al pulsarlo.
#
# Cada tema va acompañado de un diagrama. Disponibles:
#   histograma · frontera · despliegue · capas · bucle · recuperar ·
#   chip · reparto · ciclo
LINEAS_TITULO = "LÍNEAS DE ESTUDIO"
LINEAS_TEXTO  = "Tres frentes de trabajo. Pulsa una tarjeta para ver de qué va."

LINEAS = [
    {
        "clave": "ds",
        "color": "cian",
        "nombre": "Data Science y Machine Learning",
        "resumen": "Análisis, estadística y modelos que predicen.",
        "alias": "Data Science & Machine Learning",
        "titulo": "Ciencia de Datos y Aprendizaje Automático",
        "esencia": "Del dato crudo al modelo en producción.",
        "temas": [
            ("Estadística y minería de datos",     "histograma"),
            ("Aprendizaje automático y profundo",  "frontera"),
            ("Modelos en producción",              "despliegue"),
        ],
    },
    {
        "clave": "ia",
        "color": "ambar",
        "nombre": "IA y Sistemas Inteligentes",
        "resumen": "Transformers, agentes y RAG.",
        "alias": "AI & Intelligent Systems",
        "titulo": "Inteligencia Artificial y Sistemas Inteligentes",
        "esencia": "De los modelos de lenguaje a los agentes que actúan.",
        "temas": [
            ("Modelos de lenguaje y Transformers", "capas"),
            ("Agentes inteligentes",               "bucle"),
            ("RAG y GraphRAG",                     "recuperar"),
        ],
    },
    {
        "clave": "hpc",
        "color": "morado",
        "nombre": "High Performance Computing",
        "resumen": "Cómputo en GPU, en paralelo y a escala.",
        "alias": "High Performance Computing",
        "titulo": "Computación de Alto Desempeño e Infraestructura para IA",
        "esencia": "El cómputo que entrena y sostiene la IA.",
        "temas": [
            ("Programación en GPU",                "chip"),
            ("Cómputo paralelo y distribuido",     "reparto"),
            ("MLOps y LLMOps",                     "ciclo"),
        ],
    },
]

# ── CALENDARIO ────────────────────────────────────────────────────────
CALENDARIO_TITULO = "CALENDARIO"
CALENDARIO_TEXTO  = "La época de clases y las reuniones del semillero, semana a semana."

# Época de clases (AAAA-MM-DD). Los días entre estas dos fechas se resaltan.
CLASES_INICIO = "2026-08-27"
CLASES_FIN    = "2026-12-19"

# Día de la reunión semanal: 0=lunes 1=martes 2=miércoles … 6=domingo
REUNION_DIA    = 2
REUNION_TITULO = "Reunión del semillero"
REUNION_NOTA   = ("Todavía no se tiene planeado qué se dará en esta sesión. "
                  "El tema se anuncia por WhatsApp e Instagram unos días antes.")

# Cuando ya se sepa el tema de una reunión, ponla aquí y deja de salir como
# «por definir»:   "2026-09-02": ("Título", "Un par de líneas sobre la sesión"),
REUNIONES = {
}

# Fechas marcadas del semestre:  "AAAA-MM-DD": (etiqueta, color)
# Las académicas van todas en ámbar; deja los otros colores para lo demás.
HITOS = {
    "2026-08-27": ("Inicio de clases", "ambar"),
    "2026-12-19": ("Fin de clases",    "ambar"),
}
