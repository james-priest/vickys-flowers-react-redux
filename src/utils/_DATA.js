const products = {
  product1: {
    id: 'product1',
    name: 'Sunflower Melody',
    cost: 30,
    selectedQty: undefined,
    image: '../images/flower-1.png',
    image2x: '../images/flower-1@2x.png',
    image3x: '../images/flower-1@3x.png'
  },
  product2: {
    id: 'product2',
    name: 'Spring Mix',
    cost: 35,
    selectedQty: undefined,
    image: '../images/flower-2.png',
    image2x: '../images/flower-2@2x.png',
    image3x: '../images/flower-2@3x.png'
  },
  product3: {
    id: 'product3',
    name: 'Colorful Arrangement',
    cost: 40,
    selectedQty: undefined,
    image: '../images/flower-3.png',
    image2x: '../images/flower-3@2x.png',
    image3x: '../images/flower-3@3x.png'
  },
  product4: {
    id: 'product4',
    name: 'Tulip Season',
    cost: 50,
    selectedQty: undefined,
    image: '../images/flower-4.png',
    image2x: '../images/flower-4@2x.png',
    image3x: '../images/flower-4@3x.png'
  }
}

let cart = {
  total: 0,
  quantity: 0
}

export const _getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...products }), 1000)
  })
}

export function _getCart() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...cart }), 1000)
  })
}

export function _saveCart({ cost, selectedQty }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      cart = {
        total: cart.total + cost * selectedQty,
        quantity: cart.quantity + selectedQty
      }

      res(cart)
    }, 1000)
  })
}
