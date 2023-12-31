import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import QRCode from "qrcode";


export const Qrgen = (qr) => {
    const canvasRef = useRef();
    
    useEffect(()=>{
        QRCode.toCanvas(
            canvasRef.current,
           
            qr.qr || " ",
            (error) => error && console.error(error)
          );
    },[qr])

  return (
    <div>
        {console.log("qr for qrpage",qr)}
         <div style={{ marginTop: 100,marginLeft:475}}>
          <div>
          <canvas ref={canvasRef} />
             <b> <p  style={{color:'white'}}>Details Of Latest Transaction</p></b>
          </div>
          </div>
    </div>
  )
}
