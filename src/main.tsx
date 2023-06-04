import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginAuth from './pages/Login-Auth.tsx';
import Users from './pages/Users.tsx';
import UserDetails from './pages/User-details.tsx';

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
