import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';
import Navbar from './Components/Navbar/Navbar';


const countriesPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1 className='text-[#fff] text-center '>Loading.....</h1>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>

    </div >
  );
};

export default App;