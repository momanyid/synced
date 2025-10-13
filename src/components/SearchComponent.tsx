import React from 'react'
import './SearchComponent.css'

const SearchComponent:React.FC = () => {
  return (
    <div className="search-container">
        <input type='text' placeholder='Search...' className='search-input' />
    </div>
  )
}

export default SearchComponent