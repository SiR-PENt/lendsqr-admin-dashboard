import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginAuth from './Login-Auth.tsx';
import Users from './Users.tsx';
import UserDetails from './User-details.tsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginAuth/>
  },

  {
    path: "/dashboard/users",
    element: <Users/>
  },

  {
    path: "/dashboard/users/:id",
    element: <UserDetails/>
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
