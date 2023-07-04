import axios from "axios";
import React, { useEffect, useState } from "react";
import { OtpPage } from "./OtpPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [otppage, setotppage] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch("/api/login/checksession")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/home");
        }
      });
  }, []);

  const signupUser = async (e) => {
    e.preventDefault();
    console.log("Sign up form submitted ✅");

    const response = await axios.post("/api/signup/signup", {
      username,
      email,
      password,
    });
    if (response.data == true) {
      toast.success("Check Email For Otp");
      setotppage(true);
    } else if (response.data == false) {
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <div>
        <section className="block-span" style={{background:"green"}}>
          {" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>
          <div className="signin">
            <div className="content">
              <h2>Sign Up</h2>

              <form className="form" onSubmit={signupUser}>
                <div className="inputBox">
                  <input
                    type="text"
                    id="username"
                    required
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                    value={username}
                    autoComplete="off"
                  />{" "}
                  <i>Username</i>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    id="email"
                    required
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    value={email}
                    autoComplete="off"
                  />{" "}
                  <i>Email</i>
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    value={password}
                    autoComplete="off"
                  />{" "}
                  <i>Password</i>
                </div>

                <div className="links">
                  {" "}
                  <a href="/">SignIn</a>
                </div>

                <div className="inputBox">
                  <input type="submit" value="SignUp" onClick={signupUser} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {otppage && <OtpPage setotppage={setotppage} />}
      <ToastContainer />
    </>
  );
};
