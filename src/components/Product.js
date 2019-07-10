import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropDown from './DropDown'

export default class Product extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    image2x: PropTypes.string.isRequired,
    image3x: PropTypes.string.isRequired
  }
  render() {
    const { image, image2x, image3x } = this.props
    return (
      <figure className="product-container">
        <img
          src={image}
          srcSet={`
                ${image2x} 2x,
                ${image3x} 3x
              `}
          className="product-image"
          alt="Sunflower Melody Flower Arrangement"
          draggable="true"
          data-quantity-id="product1"
          data-product-cost="30"
        />
        <figcaption className="product-label">Sunflower Melody</figcaption>
        <div className="price" aria-label="cost">
          $30.00
        </div>
        <label htmlFor="product1" className="a11y">
          Quantity
        </label>
        <DropDown id={1} count={20} value={5} />
      </figure>
    )
  }
}
