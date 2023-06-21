import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { OtpPage } from './OtpPage';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    
    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const [loader, setloader] = useState(false);
    const navigate = useNavigate()
  
    
    useEffect(() => {
        setloader(true)
    
        fetch('/api/login/checksession').then(response => response.json())
          .then((data) => {
            if (data.success) {
                
              setloader(false)
              navigate('/home')
            }
          })
        setloader(false)
      }, [])
      

      const login = (e) => {
        e.preventDefault();
        setloader(true)
        const response = fetch('/api/login/login', {
          method: 'post',
          body: JSON.stringify({
            email: email,
            password: password
          }),
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json())
          .then((data) => {
            if (data.success) {
              setloader(false)
              toast.success('LogedIn')
              navigate('/home')
            } else {
                toast.error(data.message)
              setloader(false)
            }
          })
      }
    
    return (
        <div>

            <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

                <div className="signin">

                    <div className="content">

                        <h2>Sign In</h2>

                        <div className="form">
                           
                            <div className="inputBox">

                                <input type="text" required onChange={(e)=>{setemail(e.target.value)}} value={email}/> <i>Email</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required onChange={(e)=>{setpassword(e.target.value)}} value={password}/> <i>Password</i>

                            </div>

                            <div className="links">  <a href="/signup">Signup</a>

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Login" onClick={login}/>

                            </div>
                           
                        </div>

                    </div>

                </div>

            </section>
            <ToastContainer />

        </div>
    )
}
