// Este archivo sirve como puente para iniciar solo el frontend
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración similar a vite.frontend.config.ts pero aplicada programáticamente
async function startServer() {
  try {
    const server = await createServer({
      configFile: false, // No usar archivo de configuración externo
      root: path.resolve(__dirname, 'client'),
      server: {
        port: 4000,
        host: '0.0.0.0',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'client', 'src'),
          '@assets': path.resolve(__dirname, 'attached_assets'),
        },
      },
      base: './', // Para GitHub Pages
      build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
      },
    });

    await server.listen();
    
    server.printUrls();
    
    console.log('Frontend server running. Presiona CTRL+C para detener.');
  } catch (e) {
    console.error('Error iniciando servidor frontend:', e);
    process.exit(1);
  }
}

startServer();