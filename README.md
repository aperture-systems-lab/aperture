## El sitio

Página estática (HTML + CSS + JS, sin build ni dependencias).

```
index.html      Estructura de la página
css/styles.css  Estilos, animaciones y reglas responsive (móvil)
content.py      TODO el contenido editable: textos, bitácora, redes, boot
build.py        Regenera js/data.js a partir de content.py
js/data.js      Generado (no editar a mano)
js/app.js       Lógica y visualizaciones
assets/         Logos e imágenes
```

Para verlo en local: `python -m http.server 8000`

## Actualizar el contenido

Todo el contenido (textos del sitio, bitácora, redes, boot) vive en `content.py`.
Edita ese archivo y luego corre:

```
python build.py
```

Eso regenera `js/data.js`, que es lo que lee la web. No edites `js/data.js` a mano.
"# aperture.github.io" 
