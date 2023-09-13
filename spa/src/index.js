import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/*import das paginas*/
import PaginaInicial from './paginas/PaginaInicial';
import DetalhesProduto from './paginas/DetalhesProduto';
import PaginaCarrinho from './paginas/PaginaCarrinho';
/*Criando as rotas*/
const roteador = createBrowserRouter([
  { path: '/', element: <PaginaInicial /> },
  { path: '/deta/:id', element: <DetalhesProduto /> },
  { path: '/carrinho', element: <PaginaCarrinho />}
]);
/*Renderizando as rotas*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {roteador}/>
  </React.StrictMode>
);

reportWebVitals();
