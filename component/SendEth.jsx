import React from "react";
import { useState } from "react";
import { Navbar } from "./Navbar";

const SendEth = () => {
  const [sendAmount, setsendAmount] = useState("");
  const [loader, setloader] = useState(false);




  const validateSendAmount = (event) => {
    let inputValue = event.target.value;
    // Remove any non-numeric characters except dot (.)
    inputValue = inputValue.replace(/[^0-9.]/g, "");

    // Check if the value is a valid float or integer
    if (inputValue && !/^(\d+(\.\d+)?|\.\d+)$/.test(inputValue)) {
      // If the value is invalid, display an error message
      event.target.setCustomValidity("Please enter a valid number");
    } else {
      // Clear the error message
      event.target.setCustomValidity("");
    }

    setsendAmount(inputValue);
  };

  const sendeth = () => {
    fetch("/api/wallet/sendeth")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Success");
          setloader(false);
          navigate("/");
        } else {
          console.log("api not ");
          navigate("/");
        }
      });
  };
  return (
    <>
      <Navbar />
      
      <div className="container py-5">
        <h1 className="text-center" style={{ color: "white" }}>
          Send Eth With Dwallet
        </h1>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="bg-white rounded-lg  shadow-sm p-5">
              <div className="tab-content">
                <div id="nav-tab-card" className="tab-pane fade show active">
                  <p className="alert alert-success"> Success or error</p>
                  <form role="form">
                    <div className="form-group">
                      <input
                        style={{ margin: "10px" }}
                        type="text"
                        placeholder="Enter Wallet Address"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        style={{ margin: "10px" }}
                        type="text"
                        placeholder="Enter Amount in ETH"
                        required
                        className="form-control"
                        value={sendAmount}
                        onChange={validateSendAmount}
                      />
                    </div>

                    <button
                      type="button"
                      className="subscribe btn btn-success btn-block  shadow-sm"
                      onClick={sendeth} >
                      Send ETH
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendEth;
