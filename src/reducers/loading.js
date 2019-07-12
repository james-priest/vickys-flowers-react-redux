import { LOADING } from '../actions/loading'

export default function loading(state = {}, action) {
  if (action.type === LOADING) {
    return {
      ...state,
      isLoading: action.flag
    }
  }
  return state
}
