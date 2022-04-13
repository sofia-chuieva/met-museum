import React, { useState } from 'react'
import './SearchBar.css'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
  

    const getSearch = (e) => {
      e.preventDefault();
      getQuery(text);
    }
     
    const updateSearch = (e) => {
      setText(e.target.value)
    }

    return (
      <div className='SearchBar'>
        <h1>Explore the ART</h1>
        <form onSubmit={getSearch}>
          <input
            type='text'
            placeholder='Search art'
            value={text}
            onChange={updateSearch}
            autoFocus
          />
        </form>
      </div>
    )
  }
  
  export default Search