import {  useState } from 'react'
import SearchBar from './Searchbar.jsx'
import SelectMenu from './SelectMenu.jsx'
import CountriesList from './CountriesList.jsx'
import useTheme from '../hooks/useTheme.js'

const Home = () => {
  const [query, setQuery] = useState('')
  const [isDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}

export default Home
