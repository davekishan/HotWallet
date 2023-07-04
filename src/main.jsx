import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { Login } from "../component/login.jsx";
import { SignupPage } from "../pages/SignupPage.jsx";
import { Home } from "../pages/Home.jsx";
import { OtpPage } from "../component/OtpPage.jsx";
import About from "./../component/About";
import { Footer } from "../component/footer.jsx";
import SendEth from "../component/SendEth.jsx";
import { Loader } from "../component/Loader.jsx";
import { Navbar } from './../component/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);