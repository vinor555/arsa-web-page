import { copyFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * El sitio se publica en la raíz de arsagroup.com.gt (ver public/CNAME).
 * Sin dominio propio viviría en https://<usuario>.github.io/<repo>/ y habría
 * que exportar VITE_BASE=/<repo>/ al construir.
 */
const base = process.env.VITE_BASE ?? '/';

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
