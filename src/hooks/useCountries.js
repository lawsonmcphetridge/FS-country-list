import { useState, useEffect } from 'react';
import { getCountries } from '../services/country';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState('all');
  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);
    
  const filterCountries = () => {
    if (type === 'all') return countries;
    return countries.filter((country) => country.continent === type);  
  };
  return { filterCountries, type, setType, };
}