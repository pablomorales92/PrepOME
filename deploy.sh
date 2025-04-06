#!/bin/bash

# Script para preparar la aplicación para GitHub Pages

# Crear directorio de construcción si no existe
mkdir -p gh-pages

# Eliminar archivos anteriores si existen
rm -rf gh-pages/*

# Copiar archivos de configuración simplificados
cp vite.frontend.config.ts vite.config.ts
cp package.frontend.json package.json

# Limpiar node_modules y reinstalar las dependencias de frontend
echo "Limpiando node_modules y reinstalando dependencias de frontend..."
rm -rf node_modules
npm install

# Construir la aplicación
echo "Construyendo la aplicación..."
npm run build

# Mover archivos construidos al directorio gh-pages
echo "Preparando archivos para GitHub Pages..."
cp -r dist/* gh-pages/

# Indicar al usuario los siguientes pasos
echo ""
echo "¡Construcción completada!"
echo "Los archivos para GitHub Pages están en el directorio 'gh-pages'."
echo ""
echo "Para publicar en GitHub Pages:"
echo "1. Crea un repositorio en GitHub."
echo "2. Habilita GitHub Pages para la branch 'gh-pages'."
echo "3. Sube el contenido de la carpeta 'gh-pages' a la branch 'gh-pages'."
echo ""