import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdateCart } from '../actions/cart'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'

class Cart extends Component {
  onDragOver = e => {
    e.preventDefault()
  }
  onDrop = e => {
    const { handleUpdateCart, products } = this.props
    const product = JSON.parse(e.dataTransfer.getData('product'))
    const prodKeys = Object.keys(products)

    handleUpdateCart(product.cost, product.selectedQty, prodKeys)
  }
  render() {
    const { loading, cart } = this.props

    return (
      <div
        className="cart-container all-caps"
        id="cart"
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => this.onDrop(e)}
      >
        <div>total amount:</div>
        <div className="total">
          $<span id="cart-total">{cart.total}</span>
        </div>
        <div> | </div>
        {loading.cartLoading === true ? (
          <div style={{ height: 32, width: 36, textAlign: 'center' }}>
            <ClipLoader
              color={'#86ECB9'}
              loading={loading.cartLoading}
              size={20}
              css={css`
                height: 20px;
                width: 20px;
              `}
            />
          </div>
        ) : (
          <>
            <div className="cart-image" id="cart-qty">
              {cart.quantity}
            </div>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ cart, loading, products }) => {
  return {
    loading,
    cart,
    products
  }
}

export default connect(
  mapStateToProps,
  { handleUpdateCart }
)(Cart)
