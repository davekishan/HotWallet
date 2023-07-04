import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../component/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [loader, setloader] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    sendmaster();
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

  const sendmaster = () => {
    setloader(true);
    fetch("/api/login/sendtomaster")
      .then((response) => response.json())
      .then((data) => {
        toast.success("Sended to master Successfully");
        setloader(false);
        return 200;
      });
  };

  // const createwallet = async() =>{
  //   const response = await fetch("/api/wallet/createwallet")
  //   console.log("This is created wallet:",response);
  //   toast.success("Created Successfully");

  // }

  const createwallet = (e) => {
    e.preventDefault();
    fetch("/api/wallet/createwallet")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Created Successfully");
          alert("Account Succesfully Created Here is your new walletaddress: "+ data.address);
          setloader(false);
        } else {
          toast.error("Something Went Wrong");
        }
        navigate(0)
       

      });
  };

  return (
    <div>
      <div className="text-center">
        <div className="container py-5">
          <h1 className="text-center" style={{ color: "#0f0" }}>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {loader && <Loader />}
      </div>
    </div>
  );
};
