import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./footer";
import TransferHistory from "./TransactionHistory";

const SendEth = () => {
  const [sendAmount, setsendAmount] = useState("");
  const [loader, setloader] = useState(false);
  const [account,setaccount]=useState();
  const [value,setvalue]=useState();
  const [data,setdata]=useState();


  const sendeth = () => {
    fetch("/api/wallet/sendeth",{
      method: 'post',
      body: JSON.stringify({
        account: account,
        value: value
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Success");
          setloader(false);
          location.reload()
        } else {
          location.reload()
          console.log("api not ");
         
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
                  {/* <p className="alert alert-success"> Success or error</p> */}
                  <form role="form">
                    <div className="form-group">
                      <input
                        style={{ margin: "10px" }}
                        type="text"
                        placeholder="Enter Wallet Address"
                        required
                        className="form-control"
                        onChange={(e) => { setaccount(e.target.value) }} value={account}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        style={{ margin: "10px" }}
                        type="Number"
                        placeholder="Enter Amount in ETH"
                        required
                        className="form-control"
                        value={value}
                        onChange={(e) => { setvalue(e.target.value) }}
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
      <TransferHistory />
      <Footer/>
    </>
  );
};

export default SendEth;
