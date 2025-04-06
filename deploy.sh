#!/bin/bash

# Script de despliegue para GitHub Pages

# Construir la aplicación
npm run build

# Crear archivo .nojekyll para evitar el procesamiento de Jekyll
touch dist/.nojekyll

# Nota: Para el despliegue manual a GitHub Pages, copia todo el contenido 
# de la carpeta dist a tu repositorio de GitHub Pages.