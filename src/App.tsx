import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

/**
 * El router ya está montado para que agregar páginas nuevas (servicios,
 * proyectos, login, panel administrativo) sea solo añadir una <Route>.
 * `basename` toma el prefijo de GitHub Pages desde la configuración de Vite.
 */
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
