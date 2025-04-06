# Olimpiada Matemática - Sitio Web

Este es el sitio web oficial de la Olimpiada Matemática Española, diseñado para proporcionar información sobre el concurso, calendario, materiales y enlaces útiles.

## Cómo usar este proyecto

### Para desarrollo local

1. Clona este repositorio
2. Instala las dependencias:
   ```
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```
   npm run dev
   ```

### Para desplegar en GitHub Pages

1. Prepara los archivos para GitHub Pages:

   a. Copia el archivo `vite.frontend.config.ts` a `vite.config.ts`:
   ```
   cp vite.frontend.config.ts vite.config.ts
   ```
   
   b. Utiliza el package.json simplificado para frontend:
   ```
   cp package.frontend.json package.json
   ```
   
   c. Reinstala las dependencias:
   ```
   npm install
   ```

2. Construye la aplicación:
   ```
   npm run build
   ```

3. Los archivos generados en la carpeta `dist` están listos para ser subidos a GitHub Pages.

4. Para configurar GitHub Pages:
   - Crea un repositorio en GitHub
   - Habilita GitHub Pages desde la rama `gh-pages` o `main` (apuntando a la carpeta `/docs`)
   - Sube los archivos de la carpeta `dist` a GitHub

## Estructura del proyecto

- `/client/src/components` - Componentes reutilizables (Header, Footer, etc.)
- `/client/src/pages` - Páginas principales del sitio
- `/client/src/lib` - Utilidades y configuración
- `/client/public` - Archivos estáticos

## Notas

- Este sitio utiliza React con Vite para una experiencia de desarrollo óptima
- La navegación está basada en hash para compatibilidad con GitHub Pages
- El diseño es totalmente responsive para dispositivos móviles y de escritorio