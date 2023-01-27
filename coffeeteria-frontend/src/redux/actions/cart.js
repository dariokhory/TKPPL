export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    payload: data
  }
}

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}

export const resetCart = () => {
  return {
    type: 'RESET_CART'
  }
}
