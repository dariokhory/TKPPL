// pkgs: axios
import axios from 'axios'
// pkgs: react-toastify
import { toast } from 'react-toastify'

const axiosApiInstances = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
})

// axios: interceptor-request
axiosApiInstances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// axios: interceptor-response
axiosApiInstances.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 403) {
      toast.warning('Your token has expired. Please login again !')
      localStorage.clear()
      window.location.href = '/auth/sign-in'
    }
    return Promise.reject(error)
  }
)

export default axiosApiInstances
