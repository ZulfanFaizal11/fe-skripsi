import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LayoutAdmin from './components/LayoutAdmin'
import About from './pages/About'
import NotFoundPage from './pages/404'
import LandingPage from './pages/LandingPage';
import HomeAdmin from './pages/HomeAdmin';
import SettingAdmin from './pages/SettingAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomeAdmin />,
      },
      {
        path: "settings",
        element: <SettingAdmin />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
