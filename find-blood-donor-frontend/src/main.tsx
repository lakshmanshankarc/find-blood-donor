import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/Signup';
import ErootPage from './error-page';
import About from './pages/About';
import App from './App'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { CookiesProvider } from 'react-cookie'
import './index.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Search from './pages/search'

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
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErootPage />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErootPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErootPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)