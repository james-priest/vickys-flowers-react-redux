import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import { BeatLoader } from 'react-spinners'

class ProductList extends Component {
  render() {
    const { loading } = this.props
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
          {loading.isLoading === true ? (
            <div>
              <p>Loading...</p>
              <BeatLoader
                css={css`
                  display: block;
                `}
                size={20}
                color={'#d33169'}
                loading={loading.isLoading}
              />
            </div>
          ) : (
            products.map(product => (
              <Product key={product.name} product={product} />
            ))
          )}
        </div>
      </main>
    )
  }
}

function mapStateToProps({ products, loading }) {
  return {
    loading,
    products
  }
}

export default connect(mapStateToProps)(ProductList)
