import React, { useEffect, useState } from 'react'

export const Getallac = ({accountchange}) => {

    useEffect(() => {
        getac()
    }, [])
    const [selectedOption, setSelectedOption] = useState('');
    const [data,setdata]=useState();

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      accountchange(event.target.value);
    };


    const getac = () => {
        fetch("/api/wallet/getallac")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setdata(data)
                    console.log(data);
                }
            });
    }

    let optionItems = data?.user?.map((item) =>
    <option key={item.array}>{item.walletAddress}</option>

);
   
    return (
        <>
                <select value={selectedOption} onChange={handleSelectChange}>
                    {optionItems}
                </select>
        </>
    )
}
