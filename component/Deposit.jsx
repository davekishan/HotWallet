import React from 'react'
import { useState } from 'react';
import { Navbar } from "../component/Navbar";

const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState('');


    const validateDepositAmount = (event) => {
        let inputValue = event.target.value;
        // Remove any non-numeric characters except dot (.)
        inputValue = inputValue.replace(/[^0-9.]/g, '');
    
        // Check if the value is a valid float or integer
        if (inputValue && !/^(\d+(\.\d+)?|\.\d+)$/.test(inputValue)) {
          // If the value is invalid, display an error message
          event.target.setCustomValidity('Please enter a valid number');
        } else {
          // Clear the error message
          event.target.setCustomValidity('');
        }
    
        setDepositAmount(inputValue);
      };
  return (
    <>

    <Navbar/>
    <div className="container py-5">
    <h1 className="text-center" style={{ color: "white" }}>
        Deposit Eth With Dwallet
      </h1>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <div className="bg-white rounded-lg  shadow-sm p-5">
        
        
          <div className="tab-content">
            <div id="nav-tab-card" className="tab-pane fade show active">
              <p className="alert alert-success"> Success or error</p>
              <form role="form">

                <div className="form-group">
                
                  <input style={{margin:"10px"}}
                    type="text"
                    placeholder="Enter Wallet Address"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input style={{margin:"10px"}}
                    type="text"
                    placeholder="Enter Amount in ETH"
                    required
                    className="form-control"
                    value={depositAmount}
                     onChange={validateDepositAmount}
                  />
                </div>
                

                <button
                  type="button"
                  className="subscribe btn btn-success btn-block  shadow-sm"
                >
                  Deposit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  )
}

export default Deposit