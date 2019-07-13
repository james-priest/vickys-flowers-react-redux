import { getInitialData } from '../utils/api'
import { receiveProducts } from './products'
import { receiveCart } from './cart'
import { isLoading, cartLoading } from './loading'

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
    dispatch(isLoading(true))
    dispatch(cartLoading(true))
    const { products, cart } = await getInitialData()
    dispatch(receiveProducts(products))
    dispatch(receiveCart(cart))
    dispatch(isLoading(false))
    dispatch(cartLoading(false))
  }
}
