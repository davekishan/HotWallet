import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";

export const Getallac = ({ accountchange,setChain,setaddress }) => {
  useEffect(() => {
    getac();
  }, []);
  
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setdata] = useState();
  const [loader, setloader] = useState(false);
  const [temp,settemp]=useState();
  

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setaddress(event.target.value)
    accountchange(event.target.value, temp);

  };

  const handlechainchange = (event) => {
    setChain(event.target.value);
    settemp(event.target.value)
    console.log("chain handle")
    accountchange(selectedOption, event.target.value);
  };
  const getac = () => {
    setloader(true);
    fetch("/api/wallet/getallac")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setdata(data);
          setloader(false);
        }
        setloader(false);
      });
  };
  let optionItems = data?.user?.map((item) => (
    <option className="option-dropdown" key={item.array}>{item.walletAddress}</option>
  ));

  return (
    <>
      <select className="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option className="option-dropdown" defaultValue="select Account">Select Account</option>
        {optionItems}
      </select>
      <select className="dropdown" onChange={handlechainchange}>
        <option defaultValue>Select Chain</option>
        <option value="0xaa36a7">Ethereum</option>
        <option value="0x13881">Polygon</option>
      </select>
    
    </>
  );
};
