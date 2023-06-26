import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { OtpPage } from './OtpPage';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [otppage, setotppage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        fetch('/api/login/checksession').then(response => response.json())
            .then((data) => {
                if (data.success) {
                    navigate('/home')
                }
            })

    }, [])

    const signup = async (e) => {
        console.log("signup page");
        e.preventDefault();


        const response = await axios.post('/api/signup/signup', { username, email, password });
        if (response.data == true) {
            toast.success('Check Email For Otp')
            setotppage(true)
        }
        else if (response.data == false) {
            toast.error(response.data.message)

        }

    }
    return (
        <>
            <div>

                <section className='block-span'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

                    <div className="signin">

                        <div className="content">

                            <h2>Sign Up</h2>

                            <div className="form">

                                <div className="inputBox">

                                    <input type="text" required onChange={(e) => { setusername(e.target.value) }} value={username} /> <i>Username</i>

                                </div>
                                <div className="inputBox">

                                    <input type="text" required onChange={(e) => { setemail(e.target.value) }} value={email} /> <i>Email</i>

                                </div>


                                <div className="inputBox">

                                    <input type="password" required onChange={(e) => { setpassword(e.target.value) }} value={password} /> <i>Password</i>

                                </div>

                                <div className="links"> <a href="/">Signin</a>

                                </div>

                                <div className="inputBox">

                                    <input type="submit" value="Signup" onClick={signup} />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


            </div>
            {otppage &&
                <OtpPage setotppage={setotppage} />

            }
            <ToastContainer />
        </>
    )
}
