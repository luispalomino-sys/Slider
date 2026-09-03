# Slider Interactivo con Flask & Tailwind CSS v4

Proyecto desarrollado para la asignatura de **Desarrollo Web / TDW**, consistente en un carrusel/slider interactivo dinámico integrado dentro de un servidor en **Python (Flask)**.

## 🚀 Tecnologías Utilizadas

* **Backend:** Python 3.14 + Flask (Estructura modular con Blueprints)
* **Frontend:** HTML5, JavaScript Vanilla
* **Estilos:** Tailwind CSS v4 + CSS3 con efectos de Glassmorphism y animaciones
* **Control de Versiones:** Git & GitHub

## ✨ Características del Slider

* **Temporizador Visual:** Barra de progreso dinámica que indica el tiempo restante para el siguiente cambio de imagen.
* **Transiciones Animadas:** Efecto de zoom progresivo (*Ken Burns*) sobre la imagen activa.
* **Control Total:** Botones de navegación lateral, indicadores de tipo píldora interactivos y reproducción automática con reinicio al interactuar.
* **Diseño Responsivo:** Adaptado completamente a dispositivos móviles y pantallas de escritorio.

## Estructura del Proyecto

```text
mi-proyecto/
├── app/
│   ├── routes/
│   │   └── __init__.py      # Definición de rutas del Blueprint
│   ├── static/
│   │   ├── css/
│   │   │   └── carrusel.css # Estilos personalizados de los indicadores
│   │   ├── js/
│   │   │   └── carrusel.js  # Lógica del slider y progreso
│   │   └── img/             # Recursos de imágenes
│   ├── templates/
│   │   └── carrusel_slider/
│   │       └── carrusel.html # Plantilla principal del carrusel
│   └── __init__.py          # Fábrica de la aplicación Flask (create_app)
├── app.py                   # Punto de entrada principal
└── README.md