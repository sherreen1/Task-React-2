import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AboutPage from './About/AboutPage';
import DownloadPage from './Download/DownloadPade';
import ProdectPage from './Product/ProdectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/download',
    element: <DownloadPage />
  },
  {
    path: '/product',
    element: <ProdectPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
