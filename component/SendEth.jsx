import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import TransferHistory from "./TransactionHistory";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";
import { Qrgen } from "./Qrgen";


const SendEth = ({address,historyState,chain,accountchange}) => {
  const [loader, setloader] = useState(false);
  const [account,setaccount]=useState();
  const [value,setvalue]=useState();
  const [qr,setqr]=useState();
  const [check,setcheck]=useState(false)
  const navigate=useNavigate();

  useEffect(()=>{
    setloader(true)
    fetch("/api/login/checksession")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setloader(false)
        
      } else {
        setloader(false)
        navigate("/");
      }
    });
  },[])
  
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
          Notification.requestPermission((permission)=> {
            if (permission === "granted") {
             const notifiction=new Notification("Transaction Complete")

             notifiction.onclick=()=>{
              if(data.chain == "0xaa36a7")
              {
                window.open(`https://sepolia.etherscan.io//tx/${data.hash}`)
              }else
              {
                window.open(`https://mumbai.polygonscan.com//tx/${data.hash}`)
              }
             }
            }
         })

         toast.success(data.message)
         if(data.chain == "0xaa36a7")
         {
           setqr(`https://sepolia.etherscan.io//tx/${data.hash}`)
           setcheck(true)
         }else if(data.chain=="0x13881"){
           setqr(`https://mumbai.polygonscan.com//tx/${data.hash}`)
           setcheck(true)
         }
          accountchange(address,chain)
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
        <h1 className="text-center" style={{ color: "#0f0" }}>
          Send With Dwallet
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
                        placeholder="Enter Amount"
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
                      Send                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        {check && 
          <Qrgen qr={qr}/>
        }
          
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
