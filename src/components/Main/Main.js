import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import Countries from '../Countries/Countries';

export default function Main() {
  const { filterCountries, type, setType } = useCountries();
  return (
      
    <div>
      <select value={type} onChange={(e) => {
        setType(e.target.value);
      }}>
        <option value="all">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>     
      {filterCountries().map((name) => (
        <Countries key={name.id} {...name} />
      ))} 
    </div>
  );
}
