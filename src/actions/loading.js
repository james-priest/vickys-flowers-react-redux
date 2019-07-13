export const LOADING = 'LOADING'
export const CART_LOADING = 'CART_LOADING'

export function isLoading(flag) {
  return {
    type: LOADING,
    flag
  }
}

export function cartLoading(flag) {
  return {
    type: CART_LOADING,
    flag
  }
}
