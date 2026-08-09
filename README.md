# Aperture

Página estática del semillero (HTML + CSS + JS, sin build ni dependencias).

Para verla en local:

```
python -m http.server 8000
```

Y abrir http://localhost:8000

## Cómo cambiar el contenido

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
| `CALENDARIO_*`, `CLASES_*`, `REUNIONES`, `HITOS` | El calendario |
| `REDES`, `CONTACTO_TITULO`, `CONTACTO_TEXTO` | La sección de contacto |
| `BOOT` | Las líneas del "arranque" tipo terminal |
| `COLORES` | La paleta: `cian`, `verde`, `ambar`, `morado`, `azul` |

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
    ("Visión por Computador", "azul"),   # <- nuevo
]
```

O una red social nueva en `REDES` (nombre, texto, enlace, símbolo, color):

```python
REDES = [
    ("LinkedIn", "Aperture", "https://www.linkedin.com/company/aperture-semillero", "in", "azul"),
]
```

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

### Errores comunes

- **Cambié algo y no se ve** → falta correr `python build.py`.
- **`SyntaxError` al correr build.py** → casi siempre es una comilla o una coma
  que falta. El mensaje dice la línea; revisa esa y la anterior.
- **Un apóstrofe rompe el texto** → si el texto va entre `'comillas simples'` y
  contiene un `'`, usa `"comillas dobles"` por fuera.

## Un aviso

`js/data.js` lo genera `build.py` automáticamente. No lo edites a mano: se
sobrescribe en el siguiente build y pierdes el cambio.

La página de enlaces (`links/index.html`) es aparte y sí se edita a mano.
