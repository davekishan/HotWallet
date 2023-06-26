import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../component/Loader";


export const Home = () => {
  const [loader, setloader] = useState(true);
  const [history, sethistory] = useState({});
  const navigate = useNavigate();
  const [address,setAddress] = useState([]);
  useEffect(() => {
    setloader(true);
    fetch("/api/login/checksession")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setloader(false);
          navigate("/home");
        } else {
          navigate("/");
        }
      });
    gethistory()
    setloader(false);

  }, []);

  const gethistory = () => {
    fetch("/api/wallet/gethistory")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          sethistory(data.history)
        }
      });
  } 
  console.log("address",address)
  

  const createwallet = () => {
    fetch("/api/wallet/createwallet")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Success");
          setloader(false);
          setAddress(data)
          // navigate("/home");
        } else {
          console.log("api not working ");
          navigate("/");
        }
      });
  };


  return (
    <div>
      <div>
      
      </div>

      <div className="text-center">
        <div className="container py-5">



          <h1 className="text-center" style={{ color: "white" }}>
            Create Wallet
          </h1>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="bg-white rounded-lg  shadow-sm p-5">
                <div className="tab-content">
                  <div id="nav-tab-card" className="tab-pane fade show active">
                    <form role="form">
                      <button
                        className="btn btn-success"
                        style={{ align: "center" }}
                        onClick={createwallet}
                      >
                        Create Wallet
                      </button>
                      <p>Here is your new hotwallet:{address}</p>
                    </form>
                  </div>  
                </div>
              </div>
            </div>
          </div>

        <div>
         
        </div>
        </div>
      </div>
      {
        loader && <Loader />

      }
  
    </div>
  );
};
