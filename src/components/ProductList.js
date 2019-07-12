import React, { Component } from 'react'
import Product from './Product'
// import { productData } from '../utils/_DATA'
import { connect } from 'react-redux'

class ProductList extends Component {
  render() {
    const productData = this.props.products
    const products = Object.values(productData)

    return (
      <main role="main" className="max-width-container content-container">
        <div className="page-summary">
          <h2 className="page-title">Top Products</h2>
          <p>
            To add desired products to the cart, simply drag a product image to
            the cart icon found at the top right of the page.
          </p>
        </div>

        <div className="products-wrapper">
          {products.map(product => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </main>
    )
  }
}

function mapStateToProps({ products }) {
  return {
    products
  }
}

export default connect(mapStateToProps)(ProductList)
