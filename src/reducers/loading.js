import { LOADING, CART_LOADING } from '../actions/loading'

export default function loading(state = {}, action) {
  if (action.type === LOADING) {
    return {
      ...state,
      isLoading: action.flag
    }
  }
  if (action.type === CART_LOADING) {
    return {
      ...state,
      cartLoading: action.flag
    }
  }
  return state
}
