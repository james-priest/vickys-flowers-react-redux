import { RECEIVE_CART, SAVE_CART } from '../actions/cart'

export default function cart(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CART:
      return {
        ...state,
        ...action.cart
      }
    case SAVE_CART:
      return {
        ...state,
        ...action.cart
      }
    default:
      return state
  }
}
