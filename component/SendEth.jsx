import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import TransferHistory from "./TransactionHistory";
import { Loader } from "./Loader";

const SendEth = ({address,historyState,chain}) => {
  const [loader, setloader] = useState(false);
  const [account,setaccount]=useState();
  const [value,setvalue]=useState();

  
  const sendeth = () => {
    setloader(true)
    fetch("/api/wallet/sendeth",{
      method: 'post',
      body: JSON.stringify({
        account: account,
        value: value,
        from:address,
        chain:chain
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message)
         
          setloader(false);
        } else {
          setloader(false);
          // location.reload()
          toast.error(data.message)
         
        }
      });
  };
  return (
    <>

      
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
                      onClick={sendeth} style={{marginLeft:"250px"}}>
                      Send ETH
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </div>
      <TransferHistory historyState={historyState} chain={chain}/>
      {
        loader && <Loader/>
      }
    </>
  );
};

export default SendEth;
