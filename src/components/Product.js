import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropDown from './DropDown'

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  onDragStart = e => {
    e.dataTransfer.setData('product', JSON.stringify(this.props.product))
  }
  onDragEnd = e => {}
  render() {
    const { id, name, cost, image, image2x, image3x } = this.props.product

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
          draggable
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        />
        <figcaption className="product-label">{name}</figcaption>
        <div className="price" aria-label="cost">
          ${cost}
        </div>
        <label htmlFor={id} className="a11y">
          Quantity
        </label>
        <DropDown id={id} count={20} />
      </figure>
    )
  }
}
