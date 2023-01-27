// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const purchaseOrder = (data) => {
  return {
    type: 'PURCHASE_ORDER',
    payload: axiosApiInstances.post('/api/v1/order', data)
  }
}

export const getHistory = (page, id) => {
  return {
    type: 'GET_ORDER',
    payload: axiosApiInstances.get(`/api/v1/order/${id}?limit=12&page=${page}`)
  }
}

export const updatePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    payload: page
  }
}