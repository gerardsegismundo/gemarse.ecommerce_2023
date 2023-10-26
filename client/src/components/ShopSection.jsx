import { Link } from 'react-router-dom'

const ShopSection = ({ sections }) => {
  return (
    <div className='shop-section'>
      {sections.map((section, i) => (
        <div className='shop-tile' key={i}>
          <img src={section.imgSrc} alt={section.title} />
          <div className='details'>
            <h3>{section.title}</h3>
            <Link className='btn-light' to={section.link}>
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShopSection
