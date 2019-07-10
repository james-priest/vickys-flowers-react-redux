import { RECEIVE_PRODUCTS } from '../actions/products'

export default function products(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products
      }
    default:
      return state
  }
}
