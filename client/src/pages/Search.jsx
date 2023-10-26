import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import products from '../assets/data/products'
import ProductCard from '../components/ProductCard'

const Search = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchQuery = queryParams.get('q')
  const [searchResult, setSearchResult] = useState('')
  const [currentSearchTerm, setCurrentSearchTerm] = useState('')

  const [searchVal, setSearchVal] = useState('')

  const handleOnSearch = useCallback(product => {
    const productWithoutSpaces = product.replace(/\s/g, '')
    const regex = new RegExp(productWithoutSpaces, 'gi')

    const matchingProducts = products.filter(product => {
      return (
        regex.test(product.name.replace(/\s/g, '')) ||
        regex.test(product.name) ||
        regex.test(product.type) ||
        regex.test(product.color) ||
        product.category === productWithoutSpaces
      )
    })

    if (matchingProducts.length > 0) {
      setSearchResult(matchingProducts)
    } else {
      setSearchResult(null)
    }

    setCurrentSearchTerm(product)
  }, [])

  const handleOnChange = e => setSearchVal(e.target.value)

  useEffect(() => {
    if (searchQuery) {
      handleOnSearch(searchQuery)
      setCurrentSearchTerm(searchQuery)
    }
  }, [searchQuery, handleOnSearch])

  return (
    <div className='search-page'>
      <div className='container'>
        <div className='header-group'>
          <h1>
            {searchResult
              ? `Your search for "${currentSearchTerm}" revealed the following:`
              : `Your search for "${currentSearchTerm}" did not yield any results.`}
          </h1>
          <form className='search-group' onSubmit={e => e.preventDefault()}>
            <button onClick={() => handleOnSearch(searchVal)}>
              <SearchIcon />
            </button>
            <input
              type='search'
              name='search'
              value={searchVal}
              onChange={handleOnChange}
              placeholder='Search for products, categories and color'
            />
          </form>
        </div>

        {searchResult && (
          <div className='search-results'>
            {searchResult && searchResult.map(data => <ProductCard props={data} key={data._id} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
