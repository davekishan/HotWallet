import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from '../component/login.jsx';
import { SignupPage } from '../pages/SignupPage.jsx';
import { Home } from '../pages/Home.jsx';
import { OtpPage } from '../component/OtpPage.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element:<Login/>
  },
  {
    path: '/signup',
    element: <SignupPage />
  }, 
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/otp',
    element: <OtpPage/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
