import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/Signup';
import ErootPage from './error-page';
import App from './App'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { CookiesProvider } from 'react-cookie'
import './index.css'
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErootPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErootPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErootPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)