import { saveCart } from '../utils/api'
import { cartLoading } from '../actions/loading'
import { updateQuantity } from '../actions/products'

export const RECEIVE_CART = 'RECEIVE_CART'
export const SAVE_CART = 'SAVE_CART'

export function receiveCart(cart) {
  return {
    type: RECEIVE_CART,
    cart
  }
}

function updateCart(cost, selectedQty) {
  return {
    type: SAVE_CART,
    cost,
    selectedQty
  }
}

export function handleUpdateCart(cost, selectedQty, prodKeys) {
  return async dispatch => {
    dispatch(cartLoading(true))
    console.log('cost qty', cost, selectedQty)
    const returnCart = await saveCart({ cost, selectedQty })
    console.log('respond cart', returnCart)
    dispatch(updateCart(cost, selectedQty))
    dispatch(cartLoading(false))
    // randomize DropDown values
    prodKeys.forEach(productId => {
      const value = Math.floor(Math.random() * 20) + 1
      dispatch(updateQuantity(productId, value))
    })
  }
}
