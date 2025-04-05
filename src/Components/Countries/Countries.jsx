import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);
    console.log(countries);


    return (
        <div>

        </div>
    );
};

export default Countries;