import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { useState } from "react";



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <>
//     <div>
//           <BrowserRouter>
//           <Routes>
//           <Route
//                 exact path="/"
//                 element={<Login/>}
//               ></Route>
//                <Route
//                 exact path="/signup"
//                 element={<SignupPage/>}
//               ></Route>
          
//           </Routes>
//             <Navbar />
//             <Routes>
              
             
//               <Route
//                 exact path="/home"
//                 element={<Home />}
//               ></Route>
//               <Route
//                 exact path="/otp"
//                 element={<OtpPage/>}
//               ></Route>
            
//               <Route
//                 exact path="/about"
//                 element={<About/>}
//               ></Route>
//               <Route
//                 exact path="/sendeth"
//                 element={<SendEth/>}
//               ></Route>
//               <Route
//                 exact path="/loader"
//                 element={<Loader/>}
//               ></Route>
//             </Routes>
//         <Footer/>
//           </BrowserRouter>
//         </div>
//   </>
//   </React.StrictMode>



// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);