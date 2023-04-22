import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginAuth from './Login-Auth.tsx';
import Dashboard from './Dashboard.tsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginAuth/>
  },

  {
    path: "/dashboard",
    element: <Dashboard/>
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
