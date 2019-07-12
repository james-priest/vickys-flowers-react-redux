export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function updateQuantity(id, selectedQty) {
  return {
    type: UPDATE_QUANTITY,
    id,
    selectedQty
  }
}
