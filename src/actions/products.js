export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}
