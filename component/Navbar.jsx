import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import web3 from "web3"
import img from "../src/assets/pngwing.com.png"
import { Getallac } from './getallac';

export const Navbar = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [balance, setbalance] = useState();
  const [address, setAddress] = useState(false);

  useEffect(() => {
    setloader(true);
    getbalance();
    setloader(false);
  }, []);

 

  const logout=()=>{
    fetch('/api/login/logout').then(response => response.json())
    .then((data) => {
      
      if (data.success) {
        toast.success('Loged Out')
        setloader(false)
        navigate('/')
      }else{
        toast.error('Failed')
      }
    })

  }
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">
          DWallet
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
              Home <span className="sr-only"></span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/sendeth">
              SendEth
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About<span className="sr-only"></span>
            </NavLink>
          </div>
        </div>
        <h5 className='navbar-brand'><div style={{color:"green"}}><Getallac accountchange={props.accountchange}/> <button style={{}} onClick={() =>  navigator.clipboard.writeText(props?.address)}><img src={img} alt="" className='copy-button'/></button></div> Blanace : {props?.balance} ETH </h5>
        <button className='btn btn-success mx-5' onClick={logout}>Logout</button>
      </nav>
      <ToastContainer />
    </div>
  );
};
