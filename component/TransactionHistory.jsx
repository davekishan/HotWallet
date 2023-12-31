import React from "react";
import { Table } from "@web3uikit/core";
import { Link } from "react-router-dom";
import web3 from "web3";

const TransferHistory = ({ historyState, chain }) => {

  return (
    <>
      <div
        className="text-center"
        style={{
          color: "#0f0",
          fontSize: "xx-large",
          paddingBottom: "20px",
        }}
      >
        Transection History
      </div>
      <div>
       
        {historyState?.result?.length > 0 && (
          <Table
            pageSize={8}
            noPagination={false}
            style={{ width: "90vw" }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            data={historyState.result.map((e) => [
              `${web3.utils.fromWei(e.value, "ether")}`,
              `${e.from_address.slice(0, 5)}...${e.from_address.slice(38)}`,
              `${e.to_address.slice(0, 5)}...${e.to_address.slice(38)}`,
              e.block_timestamp.slice(0, 10),
          
              chain === "0xaa36a7" ? (
                <Link
                  to={`https://sepolia.etherscan.io//tx/${e.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${e.hash.slice(0, 6)}...${e.hash.slice(60)}`}
                </Link>
              ) : chain === "0x13881" ? (
                <Link
                  to={`https://mumbai.polygonscan.com//tx/${e.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${e.hash.slice(0, 6)}...${e.hash.slice(60)}`}
                </Link>
              ) : chain,
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
