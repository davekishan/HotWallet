import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../src/assets/pngwing.com.png";
import { Getallac } from "./getallac";

export const Navbar = ({ address,setaddress, setChain,chain, balance, accountchange }) => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);

  const logout = () => {
    fetch("/api/login/logout")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Loged Out");
          setloader(false);
          navigate("/");
        } else {
          toast.error("Failed");
        }
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">
         <b>DWallet</b> 
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
              <b>Home</b> <span className="sr-only"></span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/sendeth">
              <b>SendTransaction</b>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
             <b>About</b><span className="sr-only"></span>
            </NavLink>
          </div>
        </div>
        <h5 className="navbar-brand">
          <div style={{ color: "green" }}>
            <Getallac accountchange={accountchange} setaddress={setaddress }setChain={setChain} />{" "}
            <button
              style={{}}
              onClick={() => navigator.clipboard.writeText(address)}
            >
              <img src={img} alt="" className="copy-button" />
            </button>
          </div>
         
          <div>
            {chain === "0xaa36a7" && <div>Balance: {balance} ETH</div>}
           </div><div> 
            {chain === "0x13881" && <div>Balance: {balance} MATIC</div>}
          </div>

         {/* <div>Balance : {balance} ETH </div>
          <div>Balance : {balance} MATIC </div>  */}
        </h5>
        <button className="btn btn-success mx-5" onClick={logout}>
          Logout
        </button>
      </nav>
      <ToastContainer />
    </div>
  );
};
