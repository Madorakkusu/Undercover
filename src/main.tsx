import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from '~/modules/Settings/Settings';
import Setup from '~/modules/Setup/Setup';
import Game from '~/modules/Game/Game';
import Menu from '~/modules/Menu/Menu';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/play',
    element: <Setup />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
