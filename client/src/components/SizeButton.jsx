const SizeButton = ({ size, isSelected, isOutOfStock, onClick }) => (
  <span
    className={`size ${isSelected ? ' selected' : ''}${isOutOfStock ? ' out-of-stock' : ''} `}
    data-is-selected={isSelected}
    onClick={() => onClick(size)}
  >
    {size}
  </span>
)

export default SizeButton
