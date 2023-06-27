import React, { useEffect, useState } from 'react'
import { Loader } from './Loader';

export const Getallac = ({accountchange}) => {

    useEffect(() => {
        getac()
    }, [])
    const [selectedOption, setSelectedOption] = useState('');
    const [data,setdata]=useState();
    const [loader,setloader]=useState(false)

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      accountchange(event.target.value);
    };


    const getac = () => {
        setloader(true)
        fetch("/api/wallet/getallac")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setdata(data)
                    setloader(false)
                }
                setloader(false)
            });
    }

    let optionItems = data?.user?.map((item) =>
    <option key={item.array}>{item.walletAddress}</option>

);
   
    return (
        <>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option defaultValue='select Account'>Select Account</option>
                    {optionItems}
                </select>
                {
                    loader &&
                         <Loader/>
                }
        </>
    )
}
