import React from 'react';
import './Countries.css';

export default function Countries({ name, iso2 }) {
  return (
    <div className='countryContainer'>
      <div className='CountryTitle'>{name}</div>
      <img className='countryImg'
        src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/144x108/${iso2.toLowerCase()}.png 2x,
    https://flagcdn.com/216x162/${iso2.toLowerCase()}.png 3x`}
        width="72"
        height="54"
        alt={`${name}`}
      />
              
     
    </div>
  );
}
