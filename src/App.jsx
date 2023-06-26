import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from "../component/login.jsx";
import { SignupPage } from "../pages/SignupPage.jsx";
import { Home } from "../pages/Home.jsx";
import { OtpPage } from "../component/OtpPage.jsx";
import About from "./../component/About";
import { Footer } from "../component/footer.jsx";
import SendEth from "../component/SendEth.jsx";
import { Loader } from "../component/Loader.jsx";
import { Navbar } from './../component/Navbar';
import { useEffect } from 'react'
import web3 from "web3"


function App() {
  const [address,setaddress]=useState("")
  const [balance,setbalance]=useState("")

  useEffect(()=>{
    getBalance();
  },[])

  const getBalance = async () => {
    fetch("/api/wallet/getinfo")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setbalance(web3.utils.fromWei(data?.balance, 'ether'))
          setaddress(data.address)
        
        } else {
          alert("Coudn't Find Account");
          
        }
      });

  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact path="/"
              element={<Login />}
            ></Route>
            <Route
              exact path="/signup"
              element={<SignupPage />}
            ></Route>

          </Routes>
          <Navbar address={address} balance={balance}/>
          <Routes>


            <Route
              exact path="/home"
              element={<Home />}
            ></Route>
            <Route
              exact path="/otp"
              element={<OtpPage />}
            ></Route>

            <Route
              exact path="/about"
              element={<About />}
            ></Route>
            <Route
              exact path="/sendeth"
              element={<SendEth getBalance={getBalance}/>}
            ></Route>
            <Route
              exact path="/loader"
              element={<Loader />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
