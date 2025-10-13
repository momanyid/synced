import React, { useState } from 'react'
import './SearchComponent.css'

const SearchComponent: React.FC = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="search-container">
      <input 
        type='text' 
        placeholder='Search chat' 
        className='search-input'
        value={search}
        onChange={handleSearch}
      />
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    </div>
  )
}

export default SearchComponent