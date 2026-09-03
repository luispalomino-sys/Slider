import os
from flask import Blueprint, render_template, current_app

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/')
def index():
    img_dir = os.path.join(current_app.root_path, 'static', 'img')
    imagenes = []
    
    if os.path.exists(img_dir):
        imagenes = sorted([
            f for f in os.listdir(img_dir) 
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif'))
        ])
    
    return render_template('carrusel_slider/carrusel.html', imagenes=imagenes)