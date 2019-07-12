import { RECEIVE_PRODUCTS, UPDATE_QUANTITY } from '../actions/products'

export default function products(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products
      }
    case UPDATE_QUANTITY:
      const { id, selectedQty } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          selectedQty
        }
      }
    default:
      return state
  }
}
