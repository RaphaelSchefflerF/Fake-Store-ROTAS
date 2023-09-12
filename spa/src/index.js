import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PaginaSobre from './paginas/PaginaSobre';
import PaginaInicial from './paginas/PaginaInicial';
import Menu from './componentes/Menu';
import DetalhesProduto from './paginas/DetalhesProduto';
import PaginaCarrinho from './paginas/PaginaCarrinho';
import Produto from './componentes/Produto';

const roteador = createBrowserRouter([
  { path: '/', element: <PaginaInicial /> },
  { path: '/sobre', element: <PaginaSobre /> },
  { path: '/deta/:id', element: <DetalhesProduto /> },
  { path: '/carrinho', element: <PaginaCarrinho />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {roteador}/>
  </React.StrictMode>
);

reportWebVitals();
