import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import products from '../assets/data/products'
import ProductCard from '../components/ProductCard'

const Search = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchQuery = queryParams.get('q')
  const [searchResult, setSearchResult] = useState('')

  const [searchVal, setSearchVal] = useState('')

  const handleOnSearch = product => {
    const productWithoutSpaces = product.replace(/\s/g, '') // Remove spaces
    const regex = new RegExp(productWithoutSpaces, 'gi')

    const matchingProducts = products.filter(product => {
      return (
        regex.test(product.name.replace(/\s/g, '')) ||
        regex.test(product.name) ||
        regex.test(product.type.replace(/\s/g, '')) ||
        regex.test(product.type) ||
        regex.test(product.category.replace(/\s/g, '')) ||
        regex.test(product.category) ||
        regex.test(product.color.replace(/\s/g, '')) ||
        regex.test(product.color)
      )
    })

    if (matchingProducts.length > 0) {
      console.log({ matchingProducts })
      setSearchResult(matchingProducts)
    } else {
      console.log('NOT FOUND')
    }
  }

  const handleOnChange = e => setSearchVal(e.target.value)

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleOnSearch()
  }

  useEffect(() => {
    if (searchQuery) {
      handleOnSearch(searchQuery)
    }
  }, [searchQuery])

  return (
    <div className='search-page'>
      <div className='container'>
        <div className='header-group'>
          <h1>
            {searchResult
              ? `Your search for "${searchQuery}" revealed the following:`
              : `Your search for "${searchQuery}" did not yield any results.`}
          </h1>
          <form className='search-group' onSubmit={e => e.preventDefault()}>
            <button onClick={handleOnSearch}>
              <SearchIcon onClick={() => console.log('CLICKED!')} />
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
        {searchResult && searchResult.map(data => <ProductCard props={data} key={data._id} />)}
      </div>
    </div>
  )
}

export default Search
