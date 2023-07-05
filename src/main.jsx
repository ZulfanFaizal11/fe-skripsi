import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LayoutAdmin from './components/Layouts/LayoutAdmin'
import About from './pages/About'
import NotFoundPage from './pages/404'
import LandingPage from './pages/LandingPage';
import HomeAdmin from './pages/HomeAdmin';
import SettingAdmin from './pages/SettingAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import TutorialBooking from './pages/TutorialBooking';
import Contact from './pages/Contact';
import RegisterPhoto from './pages/RegisterPhoto';

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
    path: "/login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "/registerphoto",
    element: <RegisterPhoto />
  },
  {
    path: "booking",
    element: <Booking />
  },
  {
    path: "tutorial-booking",
    element: <TutorialBooking />
  },
  {
    path: "contact",
    element: <Contact />
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
