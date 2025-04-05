import React, { useState } from 'react';

const Country = ({ cuntry, handleVisitedItem }) => {


    const [visited, setVisited] = useState(false);

    const handleToggle = () => {
        setVisited(!visited)
        handleVisitedItem(cuntry);
    }


    return (
        <div className={`p-[10px] border-[1px] border-[green] ${visited ? "bg-[green]" : "bg-transparent"}`}>
            <img className='h-[150px] w-full' src={cuntry?.flags?.png} alt="image" />
            <h4 className='text-[#fff] font-medium text-[18px] line-clamp-1 pt-[5px]'>{cuntry?.name?.common}</h4>
            <button onClick={handleToggle} className={`w-full py-[8px] bg-[green] text-[#fff] mt-[10px] ${visited ? "bg-[#fff] text-[green]" : "bg-[green]"}`}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;