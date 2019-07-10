import { getInitialData } from '../utils/api'
import { receiveProducts } from './products'
import { receiveCart } from './cart'

// export function handleInitialData() {
//   return dispatch => {
//     return getInitialData().then(({ products, cart }) => {
//       dispatch(receiveProducts(products))
//       dispatch(receiveCart(cart))
//     })
//   }
// }

export function handleInitialData() {
  return async dispatch => {
    const { products, cart } = await getInitialData()
    dispatch(receiveProducts(products))
    dispatch(receiveCart(cart))
  }
}