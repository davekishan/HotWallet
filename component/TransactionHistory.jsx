import React from "react";
import { Table } from "@web3uikit/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import web3 from "web3"


const TransferHistory = ({history}) => {
  const [historyState, setHistoryState] = useState(history);

  useEffect(() => {
    console.log("history");
    console.log(historyState);
  }, [historyState]);

  useEffect(()=>{
    setHistoryState(history)
  },[history])


  
  useEffect(() => {
    setHistoryState(history); // Update historyState when history changes
  }, [history]);


  return (
    <>
      <div className="text-center" style={{color:"forestgreen",fontSize:"xx-large",paddingBottom:"20px"}}>
        Transection History 
      </div>
      <div>

        {historyState?.result?.length > 0 && ( 
          <Table
            pageSize={8}
            noPagination={false}
            style={{ width: "90vw" }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            historyState={historyState.result.map((e) => [
              `${web3.utils.fromWei(e.value, 'ether') } ETH`
,
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
