import React from 'react';
import Countries from './Components/Countries/Countries';


const countriesPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())

const App = () => {
  return (
    <div>
      <Countries countriesPromise={countriesPromise} />
    </div >
  );
};

export default App;