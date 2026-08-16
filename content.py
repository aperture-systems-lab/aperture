COLORES = {
    "cian":   "#33c9d6",
    "verde":  "#4fd6a0",
    "ambar":  "#f5b94d",
    "morado": "#c79bff",
    "azul":   "#5fb0ff",
    "rojo":   "#ff5a61",
}

TITULO_PESTANA = "Aperture · Semillero de Data Science e IA"

HERO_TITULO = 'SEMILLERO DE<br><span style="color:#29c5d6;">DATA SCIENCE E IA</span>'
HERO_TEXTO  = ('<span style="color:#1f8fa0;">//</span> Aplicamos '
               '<span style="color:#29c5d6;">modelos que predicen y deciden</span> '
               'en problemas reales. Los fundamentos son el punto de partida, no el destino.')

CHIPS = [
    ("Data Science",                "cian"),
    ("Machine Learning",            "verde"),
    ("IA & LLMs",                   "ambar"),
    ("High Performance Computing",  "morado"),
]

SOBRE = ('<strong style="color:#29c5d6;">Aperture</strong> es una comunidad estudiantil '
         'construida en torno al <strong style="color:#29c5d6;">Data Science y la IA</strong>. '
         'Convertimos la teoría en proyectos de valor, aportamos a la innovación y aprendemos '
         'a escalarlos hasta que funcionen de verdad en el mundo real.')

LAB_FRASE = "No solo estudiamos la IA. La construimos y la llevamos a la realidad."
LAB_INVITACION = "Conoce los proyectos del semillero."

CONTACTO_TITULO = "CONTACTO"
CONTACTO_TEXTO  = "¿Te suena? Súmate al semillero o escríbenos por cualquiera de estos canales."

REDES = [
    ("Instagram", "@aperture.systems",               "https://instagram.com/aperture.systems",                       "[o]", "morado"),
    ("Correo",    "aperture.systems.lab@gmail.com",   "mailto:aperture.systems.lab@gmail.com",                        "@",   "cian"),
    ("WhatsApp",  "Únete al grupo",                   "https://chat.whatsapp.com/Bi83DY3f9tDCSMHDUqyHDM?s=cl&p=a&ilr=4&amv=2", "#", "verde"),
]

BOOT = [
    ("SYSTEM",  "APERTURE OS v1.0"),
    ("ENFOQUE", "DATA SCIENCE & IA"),
    ("MODO",    "SEMILLERO DE INVESTIGACION"),
    ("LINEAS",  "DATA · ML · IA · LLMs"),
    ("ACCESO",  "CONCEDIDO"),
]

ACCESO_TITULO = "SIN REQUISITOS PREVIOS"
ACCESO_FRASE  = "Lo único que pedimos son ganas de aprender y de construir."

ACCESO_PUNTOS = [
    ("01", "Se entra sin saber",
     "No hace falta llegar sabiendo. La idea es aprender lo que no sepas, con la guía "
     "de los demás miembros del semillero.",
     "cian"),
    ("02", "Se aprende construyendo",
     "Fomentamos los proyectos, las competencias y todo lo práctico, porque se aprende haciendo.",
     "verde"),

    ("03", "Reuniones semanales",
     "Cada semana nos vemos presencialmente en la Facultad de Minas para aprender juntos. "
     "El calendario está más abajo.",
     "ambar"),
]

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

PROYECTOS_TITULO = "PROYECTOS"
PROYECTOS_TEXTO  = ("Del notebook a producción. Conoce los proyectos construidos en el semillero, "
                    "inspírate con ellos o súmate a mejorarlos.")
PROYECTOS_BOTON  = "ver los proyectos"

MARCA_SANGHELIOS = (
    '<span style="display:inline-flex; align-items:center; font-family:\'JetBrains Mono\',monospace;'
    ' font-weight:700; font-size:clamp(27px,5vw,40px); letter-spacing:-1px; line-height:1;">'
      '<span style="color:#ff5a61;">Sang</span>'
      '<span style="color:#cfe8ec;">heli</span>'
      '<svg viewBox="0 0 24 30" style="width:0.76em; height:0.95em; margin:0 0.03em;" fill="none" aria-hidden="true">'
        '<path d="M12 1.6C12 1.6 2.6 13 2.6 19.2a9.4 9.4 0 0 0 18.8 0C21.4 13 12 1.6 12 1.6Z"'
        ' stroke="#ff5a61" stroke-width="2.7"/>'
        '<path d="M7.7 19.4a4.3 4.3 0 0 0 4.3 4.3" stroke="#ff5a61" stroke-width="2.7" stroke-linecap="round"/>'
      '</svg>'
      '<span style="color:#cfe8ec;">s</span>'
    '</span>'
)

PROYECTOS = [
    {
        "clave": "sanghelios",
        "color": "rojo",
        "nombre": "Sanghelios",
        "marca": MARCA_SANGHELIOS,
        "titulo": "Inteligencia Predictiva para Bancos de Sangre",
        "periodo": "may. 2026 – jul. 2026",
        "estado": "desplegado",
        "resumen": "Anticipa la escasez de sangre 14 días antes y la convierte en campañas de donación.",
        "descripcion": ("Sistema que predice 14 días antes las posibles escaseces de sangre en el "
                        "Hospital General de Medellín utilizando un modelo XGBoost, convirtiendo esa "
                        "señal en campañas de donación diseñadas con IA, desplegadas mediante un "
                        "dashboard y un mapa 3D."),
        "claves": [
            "Predicción de escasez con 14 días de anticipación (XGBoost).",
            "Campañas de donación redactadas y segmentadas por agentes de IA.",
            "Dashboard operativo y mapa 3D de Medellín para ver dónde donar.",
        ],
        "tags": ["Python", "FastAPI", "XGBoost", "Agentes de IA", "Data Science", "Machine Learning"],
        "autores": ["Jerónimo Hoyos", "Daniel Arango", "Jose Miguel García", "Valentina Muñoz"],
        "video": "7mOG2cgMJ0c",
        "enlaces": [
            ("ver el despliegue", "https://main.jero98772.page/sanghelios/",             True),
            ("repositorio",       "https://github.com/aperture-systems-lab/Sanghelios", False),
        ],
    },
]

CALENDARIO_TITULO = "CALENDARIO"
CALENDARIO_TEXTO  = "La época de clases y las reuniones del semillero, semana a semana."

CLASES_INICIO = "2026-08-27"
CLASES_FIN    = "2026-12-19"

REUNION_DIA    = 2
REUNION_TITULO = "Reunión del semillero"
REUNION_NOTA   = ("Todavía no se tiene planeado qué se dará en esta sesión. "
                  "El tema se anuncia por WhatsApp e Instagram unos días antes.")

REUNIONES = {
}

HITOS = {
    "2026-08-27": ("Inicio de clases", "ambar"),
    "2026-12-19": ("Fin de clases",    "ambar"),
}
