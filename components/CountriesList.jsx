import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'
import CountriesListShimmer from './CountriesListShimmer.jsx'

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query) ||
          country.region.toLowerCase().includes(query)
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        ))}
    </div>
  )
}

export default CountriesList
