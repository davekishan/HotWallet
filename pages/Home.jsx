import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import web3 from "web3"
import { ethers } from 'ethers';
import { Footer } from "../component/footer";
import { Loader } from "../component/Loader";


export const Home = () => {
  const [loader, setloader] = useState(true);
  const navigate = useNavigate();

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
    setloader(false);

  }, []);


  const createwallet = () => {
    fetch("/api/wallet/createwallet")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Success");
          setloader(false);
          setAddress(data)
          navigate("/home");
        } else {
          console.log("api not working ");
          navigate("/");
        }
      });
  };


  return (
    <div>
      <div>
        <Navbar/>
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
                      <p>Here is your new hotwallet:</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
       loader && <Loader/>

      }
      <Footer />
    </div>
  );
};
