export const LOADING = 'LOADING'

export function isLoading(flag) {
  return {
    type: LOADING,
    flag
  }
}
