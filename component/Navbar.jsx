import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = ({balance}) => {
  const navigate=useNavigate();
  const [loader, setloader] = useState(false);
  

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
        <NavLink className="navbar-brand" to='/home'>DWallet</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to='/home'>Home <span className="sr-only"></span></NavLink>
            <NavLink className="nav-item nav-link" to='/deposit'>Deposit</NavLink>
            <NavLink className="nav-item nav-link" to='/about'>About<span className="sr-only"></span></NavLink>

          </div>
        </div>
        <h3 className='nav-item nav-link'>Blanace: </h3>
        <button className='btn btn-success mx-5' onClick={logout}>Logout</button>
      </nav>
      <ToastContainer />

    </div>
  )
}
