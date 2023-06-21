import React, { useEffect, useState } from 'react'
import { Navbar } from '../component/Navbar'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../component/footer';

export const Home = () => {
  const [loader, setloader] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    setloader(true)

    fetch('/api/login/checksession').then(response => response.json())
      .then((data) => {
        if (data.success) {
            
          setloader(false)
          navigate('/home')
        }else{
          navigate('/')
        }
      })
    setloader(false)
  }, [])

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <h1 style={{color:'white'}}>Welcome Home</h1>

        <Footer/>
      </div>
  )
}
