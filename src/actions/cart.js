import { saveCart } from '../utils/api'
import { cartLoading } from '../actions/loading'

export const RECEIVE_CART = 'RECEIVE_CART'
export const SAVE_CART = 'SAVE_CART'

export function receiveCart(cart) {
  return {
    type: RECEIVE_CART,
    cart
  }
}

// function updateCart(cart) {
//   return {
//     type: SAVE_CART,
//     cart
//   }
// }
function updateCart(cost, selectedQty) {
  return {
    type: SAVE_CART,
    cost,
    selectedQty
  }
}

export function handleUpdateCart(cost, selectedQty) {
  return async dispatch => {
    dispatch(cartLoading(true))
    console.log('cost qty', cost, selectedQty)
    const returnCart = await saveCart({ cost, selectedQty })
    console.log('respond cart', returnCart)
    // dispatch(updateCart(returnCart))
    dispatch(updateCart(cost, selectedQty))
    dispatch(cartLoading(false))
  }
}
