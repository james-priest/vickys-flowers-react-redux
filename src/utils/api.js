import { _getProducts, _getCart, _saveCart } from './_DATA'

// export function getInitialData() {
//   return Promise.all([_getProducts(), _getCart()]).then(([products, cart]) => ({
//     products,
//     cart
//   }))
// }

export async function getInitialData() {
  const [products, cart] = await Promise.all([_getProducts(), _getCart()])
  return { products, cart }
}

export function saveCart(cart) {
  return _saveCart(cart)
}
