const initialState = {
  msg: '',
  statusCode: null,
  product: [],
  pages: {},
  detail: {},
  detailTemp: {},
  isLoading: false,
  isError: false,
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    // Product: Fetch
    case 'GET_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        product: action.payload.data.data,
        pages: action.payload.data.page_info,
        isLoading: false,
        isError: false
      }
    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        product: [],
        isLoading: false,
        isError: true
      }
    // Page: Change
    case 'CHANGE_PAGE':
      return {
        ...state,
        pages: {
          ...state.pages,
          current_page: action.payload
        }
      }
    // Detail: Fetch
    case 'GET_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_DETAIL_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        statusCode: action.payload.data.status_code,
        detail: action.payload.data.data[0],
        detailTemp: action.payload.data.data[0],
        isLoading: false,
        isError: false,
      }
    case 'GET_DETAIL_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        statusCode: action.payload.response.status,
        detail: [],
        isLoading: false,
        isError: true
      }
    // Product: Create
    case 'ADD_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'ADD_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'ADD_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    // Temp Detail: Change
    case 'CHANGE_DETAIL': {
      return {
        ...state,
        detailTemp: {
          ...state.detailTemp,
          ...action.payload
        }
      }
    }
    // Temp Detail: Reset
    case 'RESET_CHANGE': {
      return {
        ...state,
        detailTemp: state.detail
      }
    }
    // Product: Update
    case 'UPDATE_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'UPDATE_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'UPDATE_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    // Product: Delete
    case 'DELETE_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'DELETE_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'DELETE_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    default: {
      return state
    }
  }
}