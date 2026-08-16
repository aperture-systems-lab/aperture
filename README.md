# Aperture

Todo el contenido del sitio vive en un solo archivo: `content.py`. Nunca hay que
tocar el HTML ni el JS para cambiar un texto.

El proceso son siempre 3 pasos:

1. Abre `content.py` y edita lo que quieras.
2. Corre `python build.py`.
3. Guarda los cambios en git (`git add . && git commit -m "..."` y `git push`).

Si editas `content.py` pero **no** corres `python build.py`, la web sigue
mostrando lo viejo. Ese comando es el que aplica los cambios.

### Qué hay dentro de content.py

Cada variable en mayúsculas es un pedazo de la página:

| Variable | Qué controla |
|---|---|
| `TITULO_PESTANA` | El título que sale en la pestaña del navegador |
| `HERO_TITULO`, `HERO_TEXTO` | El titular y el párrafo de arriba del todo |
| `CHIPS` | Las etiquetas de temas bajo el titular |
| `SOBRE`, `LAB_FRASE` | El texto de "qué es Aperture" |
| `ACCESO_TITULO`, `ACCESO_FRASE`, `ACCESO_PUNTOS` | La sección de requisitos |
| `LINEAS` | Las tres líneas de estudio y sus temas |
| `PROYECTOS_*`, `PROYECTOS` | La página de proyectos y el botón que lleva a ella |
| `CALENDARIO_*`, `CLASES_*`, `REUNIONES`, `HITOS` | El calendario |
| `REDES`, `CONTACTO_TITULO`, `CONTACTO_TEXTO` | La sección de contacto |
| `BOOT` | Las líneas del "arranque" tipo terminal |
| `COLORES` | La paleta: `cian`, `verde`, `ambar`, `morado`, `azul`, `rojo` |

Los colores se usan por nombre, no por código. Donde una lista pide un color,
va `"cian"` o `"verde"`, no `"#33c9d6"`.

### Cambiar un texto

Busca la variable y cambia lo que está entre comillas:

```python
LAB_FRASE = "No solo estudiamos la IA. La construimos."
```

Algunos textos aceptan HTML para resaltar palabras. Si ves `<span>` o
`<strong>` dentro del texto, puedes reutilizarlos:

```python
HERO_TEXTO = ('<span style="color:#1f8fa0;">//</span> Aplicamos '
              '<span style="color:#29c5d6;">modelos que predicen</span> '
              'en problemas reales.')
```

### Añadir un punto a una lista

Las listas van entre `[ ]` y cada elemento termina en coma. Para añadir uno,
copia el anterior y edítalo. Por ejemplo, un chip nuevo:

```python
CHIPS = [
    ("Data Science",     "cian"),
    ("Machine Learning", "verde"),
    ("Visión por Computador", "azul"),
]
```

O una red social nueva en `REDES` (nombre, texto, enlace, símbolo, color):

```python
REDES = [
    ("LinkedIn", "Aperture", "https://www.linkedin.com/company/aperture-semillero", "in", "azul"),
]
```

### Añadir un proyecto

Cada proyecto es un bloque dentro de `PROYECTOS`. Copia el de Sanghelios y
cambia los campos:

```python
PROYECTOS = [
    {
        "clave": "sanghelios",          # nombre de carpeta que sale en la tarjeta
        "color": "rojo",                # color de la tarjeta
        "nombre": "Sanghelios",
        "marca": MARCA_SANGHELIOS,      # logo en HTML; opcional, si no va el nombre
        "titulo": "Inteligencia Predictiva para Bancos de Sangre",
        "periodo": "may. 2026 – jul. 2026",
        "estado": "desplegado",         # desplegado, en curso, archivado...
        "resumen": "Una línea, la que se lee en la tarjeta.",
        "descripcion": "El párrafo largo, el que se lee al abrirlo.",
        "claves": ["Un logro", "Otro logro"],
        "tags": ["Python", "XGBoost"],
        "video": "7mOG2cgMJ0c",         # solo el id de YouTube, vacío si no hay
        "enlaces": [
            ("ver el despliegue", "https://...", True),   # True = botón destacado
            ("repositorio",       "https://...", False),
        ],
    },
]
```

El campo `marca` es el logo escrito en HTML, porque un PNG con fondo blanco se
vería mal sobre el fondo oscuro del sitio. Si lo dejas fuera, la tarjeta usa el
`nombre` en texto y funciona igual.

### El calendario

Las reuniones **no** se escriben una a una: se generan solas a partir de
`CLASES_INICIO`, `CLASES_FIN` y `REUNION_DIA` (0 = lunes, 2 = miércoles).

Todas salen como «tema por definir» hasta que le pongas uno en `REUNIONES`,
usando la fecha como clave:

```python
REUNIONES = {
    "2026-09-02": ("Cómo funcionan las redes neuronales", "De qué va la sesión."),
    "2026-09-09": ("Introducción a PyTorch", "Primer modelo entrenado en clase."),
}
```

Las fechas sueltas que quieras resaltar (inicio de clases, parciales, eventos)
van en `HITOS`, con su color:

```python
HITOS = {
    "2026-08-27": ("Inicio de clases", "ambar"),
}
```

Las fechas siempre en formato `"AAAA-MM-DD"`.
