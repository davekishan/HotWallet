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
import { Getallac } from '../component/getallac'
import { ethers } from "ethers";
import TransferHistory from '../component/TransactionHistory'




function App() {
  const [address,setaddress]=useState("")
  const [balance,setbalance]=useState("")
  const [history,sethistory]=useState({});


  const getbalance = async (address) => {
    const network = 'sepolia' // use rinkeby testnet
    const provider =await ethers.getDefaultProvider(network)
    const Balance=await provider.getBalance(address)
    console.log(Balance);
    setbalance(web3.utils.fromWei(Balance.toString(), 'ether'))

  }

  const HistoryFun = () => {
    fetch("/api/wallet/gethistory/"+address)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sethistory(data.history);
          console.log("After History get")
          console.log(history)
          return 200;
        }
      });


  };

  const accountchange = async(add)=>{
  
    setaddress(add)
    const network = 'sepolia' // use rinkeby testnet
    const provider =await ethers.getDefaultProvider(network)
    const Balance=await provider.getBalance(add)
    console.log(Balance);
    setbalance(web3.utils.fromWei(Balance.toString(), 'ether'))

    return 200
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
          <Navbar address={address} balance={balance} accountchange={accountchange} HistoryFun={HistoryFun}/>
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
              element={<SendEth getbalance={getbalance} address={address} HistoryFun={HistoryFun} history={history}/>}
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
