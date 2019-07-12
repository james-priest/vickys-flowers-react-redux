import { combineReducers } from 'redux'
import loading from './loading'
import products from './products'
import cart from './cart'

export default combineReducers({
  loading,
  products,
  cart
})
