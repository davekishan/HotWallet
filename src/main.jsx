import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../component/login.jsx";
import { SignupPage } from "../pages/SignupPage.jsx";
import { Home } from "../pages/Home.jsx";
import { OtpPage } from "../component/OtpPage.jsx";
import About from "./../component/About";
import { Footer } from "../component/footer.jsx";
import SendEth from "../component/SendEth.jsx";
import { Loader } from "../component/Loader.jsx";
import { Navbar } from "../component/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/sendeth",
    element: <SendEth/>,
  }, 
  {
    path: "/loader",
    element: <Loader/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <Navbar/>
      
      </RouterProvider>
  </React.StrictMode>
);
