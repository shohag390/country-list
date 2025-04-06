import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';


const countriesPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1 className='text-[#fff] text-center '>Loading.....</h1>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div >
  );
};

export default App;