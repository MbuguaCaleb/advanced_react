import React from 'react'
//Import from PropTypes Package
import PropTypes from 'prop-types'

//when i am not importing a Javascript file I must have a full path including the extension
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  //Only when the Image is defined i should return an Image Url
  const url = image && image.url
  return (
    <article className='product'>
      {/* for a missing Object i cannot fix it with the ternary Operator */}
      {/* It is still going to throw Undefined error */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
}

//Components have a property called propType
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

//Incase a Property is missing we can setUp default props

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// }
export default Product
