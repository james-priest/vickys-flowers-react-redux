import { RECEIVE_CART, SAVE_CART } from '../actions/cart'

export default function cart(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CART:
      return {
        ...state,
        ...action.cart
      }
    case SAVE_CART:
      const { cost, selectedQty } = action
      console.log('state', state)
      console.log('cost', cost)
      console.log('selectedQty', selectedQty)
      return {
        ...state,
        total: state.total + cost * selectedQty,
        quantity: state.quantity + selectedQty
        // ...action.cart
      }
    default:
      return state
  }
}
