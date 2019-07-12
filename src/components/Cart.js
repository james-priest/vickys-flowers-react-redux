import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUpdateCart } from '../actions/cart'

class Cart extends Component {
  onDragOver = e => {
    e.preventDefault()
  }
  onDrop = e => {
    const { handleUpdateCart } = this.props
    const product = JSON.parse(e.dataTransfer.getData('product'))

    handleUpdateCart(product.cost, product.selectedQty)
  }
  render() {
    const { cart } = this.props
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
        <div className="cart-image" id="cart-qty">
          {cart.quantity}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

export default connect(
  mapStateToProps,
  { handleUpdateCart }
)(Cart)
