import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import Countries from '../Countries/Countries';

export default function Main() {
  const { filterCountries, type, setType } = useCountries();
  return (
    <div>
      {filterCountries().map((name) => (
        <Countries key={name.id} {...name} />
      ))} 
    </div>
  );
}
