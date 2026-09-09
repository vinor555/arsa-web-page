import { copyFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * En GitHub Pages el sitio vive en https://<usuario>.github.io/<repo>/, por lo
 * que el build necesita ese prefijo. Con dominio propio basta con exportar
 * VITE_BASE=/ en el workflow.
 */
const base = process.env.VITE_BASE ?? '/arsa-web-page/';

/**
 * GitHub Pages no reescribe rutas hacia index.html, así que una URL profunda
 * devolvería 404. Publicar una copia como 404.html deja que el router del
 * cliente resuelva la ruta cuando existan más páginas.
 */
function spaFallback(): Plugin {
  return {
    name: 'arsa-spa-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, 'dist');
      copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'));
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  // `vite preview` sirve el build, asi que necesita el mismo prefijo; solo el
  // servidor de desarrollo se queda en la raiz.
  base: command === 'build' || isPreview ? base : '/',
  plugins: [react(), tailwindcss(), spaFallback()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
  },
}));
