import React, { useState } from 'react'
import { Login } from '../component/login'
import { OtpPage } from '../component/OtpPage'

export const LoginPage = () => {
  const [otppage,setotppage]=useState(false);
  return (
    <div><Login/></div>
  )
}
