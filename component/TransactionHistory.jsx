import React from 'react'
import axios from 'axios'
import { Reload } from "@web3uikit/icons";
import { Table } from "@web3uikit/core";
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const TransferHistory = (data) => {
    console.log("this is data",data);
    // const [transfers, setTransfers] = useState([]);

      
    //  const getTokenTransfers = async (email) => {
        
    //    setTransfers("");
    //     const response = await axios.get("http://localhost:3000/gethistory", {
     
    //       });
          
    //       if (response.data) {
    //         setTransfers(response.data);
    //         console.log("THis is response:",response.data);
    //       }
    // }

  return (
    <>
    <div className="text-center" style={{color:"red"}}>Transection History
        {/* Transfer History <Reload onClick={getTokenTransfers} /> */}
      {/* { wallet ? (data.data.length > 0 ? "" :
        <div className="text-center">No Transections History Found</div>) : <div className="text-center">Enter Your Wallet Address</div>} */}
      </div>
      <div>

        {data.data.length > 0 && ( 
          <Table
            pageSize={8}
            noPagination={false}
            style={{ width: "90vw" }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            Tdata={data.data.map((e) => [
              e.symbol,
              (Number(e.value) / Number(`1e${e.decimals}`)).toFixed(3),
              `${e.from_address.slice(0, 4)}...${e.from_address.slice(38)}`,
              `${e.to_address.slice(0, 4)}...${e.to_address.slice(38)}`,
              e.block_timestamp.slice(0,10),
                // chain === "0x1" ? (
                //     <Link
                //     to={`https://etherscan.io/tx/${e.transaction_hash}`}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >{`${e.transaction_hash.slice(0, 6)}...${e.transaction_hash.slice(60)}`}
                //   </Link>
                // ) :
                 chain === "0xaa36a7" ? (
                  <Link
                    to={`hhttps://sepolia.etherscan.io/tx/${e.transaction_hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${e.transaction_hash.slice(0, 6)}...${e.transaction_hash.slice(60)}`}
                  </Link>

                ) : ( 
                  null  
                )
            ])}
            header={[
              <span>Token</span>,
              <span>Amount</span>,
              <span>From</span>,
              <span>To</span>,
              <span>Date</span>,
              <span>Transection Hash</span>,
            ]}
          />
        )} 
      </div>
  </>

  );
}

export default TransferHistory