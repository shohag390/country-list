import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);

    const [visitedItem, setVisitedItem] = useState([]);
    console.log(visitedItem);


    const handleVisitedItem = (cuntry) => {
        setVisitedItem([...visitedItem, cuntry]);
    }


    return (
        <div className='px-[50px]'>
            <div className='flex items-center justify-between'>
                <h4 className='text-[green] text-[25px] font-medium uppercase pt-[20px] pb-[10px]'>Countries List</h4>
                <h4 className='text-[green] text-[25px] font-medium uppercase pt-[20px] pb-[10px]'>Visited List: {visitedItem.length}</h4>
            </div>
            <ul className='text-[#fff] grid grid-cols-5 gap-[10px] pb-[15px]'>
                {visitedItem?.map((country) => <li className='border-[1px] border-[#fff] p-[10px] line-clamp-1' key={country?.name?.common}>{country?.name?.common}</li>)}
            </ul>
            <div className='grid grid-cols-5 gap-[10px]'>
                {countries?.map((cuntry) => <Country
                    key={cuntry?.name?.common}
                    cuntry={cuntry}
                    handleVisitedItem={handleVisitedItem} />)
                }
            </div>
        </div>
    );
};

export default Countries;