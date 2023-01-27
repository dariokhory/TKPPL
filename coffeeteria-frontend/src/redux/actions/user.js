// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const registerUser = (data) => {
  return {
    type: 'SIGN_UP',
    payload: axiosApiInstances.post('/api/v1/auth/sign-up', data)
  }
}

export const loginUser = (data) => {
  return {
    type: 'SIGN_IN',
    payload: axiosApiInstances.post('/api/v1/auth/sign-in', data)
  }
}

export const getProfile = (id) => {
  return {
    type: 'GET_PROFILE',
    payload: axiosApiInstances.get(`/api/v1/user/${id}`)
  }
}

export const changeProfile = (data) => {
  return {
    type: 'CHANGE_PROFILE',
    payload: data
  }
}

export const resetChange = () => {
  return {
    type: 'RESET_CHANGE'
  }
}

export const updateProfile = (id, data) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axiosApiInstances.patch(`/api/v1/user/${id}`, data)
  }
}
