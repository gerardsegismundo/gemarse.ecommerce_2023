import { Link } from 'react-router-dom'

const ShopSection = ({ sections }) => {
  return (
    <div className='shop-section'>
      {sections.map(section => (
        <div className='shop-tile'>
          <h3>{section.title}</h3>
          <Link to={section.link}>Shop Now</Link>
        </div>
      ))}
    </div>
  )
}

export default ShopSection
