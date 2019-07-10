import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container all-caps" id="cart">
        <div>total amount:</div>
        <div className="total">
          $<span id="cart-total">0.00</span>
        </div>
        <div> | </div>
        <div className="cart-image" id="cart-qty">
          0
        </div>
      </div>
    );
  }
}
