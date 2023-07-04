import React, { useEffect, useState } from "react";
import img from "../src/assets/about.png"
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [loader, setloader] = useState(false)
  const navigate=useNavigate();
  useEffect(() => {
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
  }, [])


  return (
    <>

      <div className="aboutus">
        <div className="bg-white-about">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="about display-4">About us</h1>
                <p className="lead text-muted mb-0">
                  What is Dwallet?
                </p>
                <p className="lead text-muted mb-5">
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur repudiandae quam reprehenderit cumque unde dolores minus. Asperiores pariatur ipsum eius veniam sunt, debitis libero aperiam deleniti reprehenderit, itaque facere.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src={img}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {
          loader && <Loader />
        }
      </div>


    </>
  );
};

export default About;
