const initialState = {
  cart: [],
  subTotal: 0,
  taxAndFee: 0,
  shipping: 0,
  total: 0
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const items = [...state.cart, action.payload]
      const subTotal = items.reduce(
        (result, item) => result + item.price * item.quantity,
        0
      )
      const tax = (subTotal * 10) / 100
      const ship = items.find(
        (item) => item.delivery === 'Door Delivery' && true
      )
      const shipCost = !ship ? 0 : 10000
      return {
        ...state,
        cart: items,
        subTotal: subTotal,
        taxAndFee: tax,
        shipping: shipCost,
        total: subTotal + tax
      }
    }
    case 'REMOVE_ITEM': {
      const items = state.cart.filter(
        (_item, index) => index !== action.payload
      )
      const subTotal = items.reduce(
        (result, item) => result + item.price * item.quantity,
        0
      )
      const tax = (subTotal * 10) / 100
      const ship = items.find(
        (item) => item.delivery === 'Door Delivery' && true
      )
      const shipCost = !ship ? 0 : 10000
      return {
        ...state,
        cart: items,
        subTotal: subTotal,
        taxAndFee: tax,
        shipping: shipCost,
        total: subTotal + shipCost + tax
      }
    }
    case 'RESET_CART': {
      return {
        ...state,
        cart: [],
        subTotal: 0,
        taxAndFee: 0,
        shipping: 0,
        total: 0
      }
    }
    default: {
      return state
    }
  }
}
