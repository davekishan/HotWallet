import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../component/login.jsx";
import { SignupPage } from "../pages/SignupPage.jsx";
import { Home } from "../pages/Home.jsx";
import { OtpPage } from "../component/OtpPage.jsx";
import About from "./../component/About";
import { Footer } from "../component/footer.jsx";
import SendEth from "../component/SendEth.jsx";
import { Loader } from "../component/Loader.jsx";
import { Navbar } from "./../component/Navbar";
import { useEffect } from "react";
import web3 from "web3";
import { Getallac } from "../component/getallac";
import { ethers } from "ethers";
import Moralis from "moralis";
Moralis.start({
  apiKey: "eR0DVzOhUz8gYF1sxPIh4NBfMFtNAEOG2Fbqr1jNOnmFr9jX9GO7RsV4xTdbYKZ6",
});

function App() {
  const [address, setaddress] = useState("");
  const [balance, setbalance] = useState("");
  const [historyState, setHistoryState] = useState({});
  const [chain, setChain] = useState();




  const getbalance = async (address) => {
    const network = "sepolia"; // use rinkeby testnet
    const provider = await ethers.getDefaultProvider(network);
    const Balance = await provider.getBalance(address);
    setbalance(web3.utils.fromWei(Balance.toString(), "ether"));
  };

  const accountchange = async (add, chain) => {
    if (add && chain) {

      fetch("/api/wallet/getbalance/"+add)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setbalance(web3.utils.fromWei((data.balance).toString(), 'ether'))
          }
        });
      // if (add && chain) {
      //   const response = await Moralis.EvmApi.balance.getNativeBalance({
      //     address: add,
      //     chain: chain,
      //   });


      if (chain == "0xaa36a7") {

        //setbalance(web3.utils.fromWei((response.raw.balance).toString(), 'ether'))
        transactionHistory(add, chain)
      }
      else if (chain == "0x13881") {

        //setbalance((Number(response.raw.balance) / 1e18).toFixed(3));
        transactionHistory(add, chain)

      }
    }

  };

  const transactionHistory = async (address, chain) => {
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({

      chain: chain,
      address: address,
    });
    setHistoryState(response.raw);
    return response.raw;
  };




  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignupPage />}></Route>
          </Routes>
          <Navbar
            address={address}
            balance={balance}
            accountchange={accountchange}
            setChain={setChain}
            chain={chain}
            setaddress={setaddress}
          />
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/otp" element={<OtpPage />}></Route>

            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/sendeth"
              element={
                <SendEth
                  getbalance={getbalance}
                  address={address}
                  historyState={historyState}
                  accountchange={accountchange}
                  chain={chain}
                />
              }
            ></Route>
            <Route exact path="/loader" element={<Loader />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
