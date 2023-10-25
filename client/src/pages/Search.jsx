import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import slugify from '../utils/helpers/slugify'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'

const Search = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchQuery = queryParams.get('q')

  const [searchVal, setSearchVal] = useState('')

  const handleOnSearch = () => {
    const sluggifiedSearchVal = slugify(searchVal)
  }

  const handleOnChange = e => setSearchVal(e.target.value)

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleOnSearch()
  }

  return (
    <div className='search-page'>
      <div className='container'>
        <div className='header-group'>
          <h1>Your search for "{searchQuery}" did not yield any results.</h1>
          <form className='search-group' onSubmit={e => e.preventDefault()}>
            <button onClick={handleOnSearch}>
              <SearchIcon />
            </button>
            <input
              type='search'
              name='search'
              value={searchVal}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              placeholder='Search for products, categories and color'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
