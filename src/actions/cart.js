import { saveCart } from '../utils/api'

export const RECEIVE_CART = 'RECEIVE_CART'
export const SAVE_CART = 'SAVE_CART'

export function receiveCart(cart) {
  return {
    type: RECEIVE_CART,
    cart
  }
}

function updateCart(cart) {
  return {
    type: SAVE_CART,
    cart
  }
}

export function handleUpdateCart(cart) {
  return async dispatch => {
    const returnCart = await saveCart(cart)
    dispatch(updateCart(returnCart))
  }
}
