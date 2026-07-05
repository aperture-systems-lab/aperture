<p align="center">
  <img src="assets/aperture-cyan.png" alt="Aperture" width="300">
</p>

# Aperture

### Semillero de Data Science e IA

*No solo estudiamos la IA. La construimos y la llevamos a la realidad.*

---

## ¿Qué es Aperture?

Aperture es una comunidad estudiantil construida en torno al Data Science y la
Inteligencia Artificial. Convertimos la teoría en proyectos de valor y aprendemos
a escalarlos hasta que funcionen de verdad en el mundo real.

Sin requisitos previos: lo único que pedimos son ganas de aprender y de construir.

## Líneas de trabajo

- **Data Science** — análisis, estadística y minería de datos.
- **Machine Learning** — del notebook al ML en producción.
- **IA & LLMs** — transformers, agentes de IA y RAG.
- **High Performance Computing** — GPU programming (CUDA) y cómputo a escala.

## Súmate

- Instagram — [@aperture.systems](https://www.instagram.com/aperture.systems/)
- WhatsApp — [únete al grupo](https://chat.whatsapp.com/Bi83DY3f9tDCSMHDUqyHDM)
- Correo — [aperture.systems.lab@gmail.com](mailto:aperture.systems.lab@gmail.com)

---

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
