import React from "react";
import { Table } from "@web3uikit/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TransferHistory = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    gethistory();
  }, []);


  const gethistory = () => {
    fetch("/api/wallet/gethistory")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setData(data.history);
          console.log(data);
        }
      });
  };

  return (
    <>
      <div className="text-center" style={{color:"forestgreen",fontSize:"xx-large",paddingBottom:"20px"}}>
        Transection History 
      </div>
      <div>
      
     
        {data?.result?.length > 0 && (
          <Table 
            pageSize={8}
            noPagination={false}
            style={{ width: "90vw" }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            data={data.result.map((e) => [
              e.value,
              //   (Number(e.value) / Number(`1e${e.decimals}`)).toFixed(3),
              `${e.from_address.slice(0, 5)}...${e.from_address.slice(38)}`,
              `${e.to_address.slice(0, 5)}...${e.to_address.slice(38)}`,
              e.block_timestamp.slice(0, 10),
              <Link
                to={`https://sepolia.etherscan.io//tx/${e.hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${e.hash.slice(0, 6)}...${e.hash.slice(60)}`}
              </Link>,
            ])}
            header={[
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
};

export default TransferHistory;
