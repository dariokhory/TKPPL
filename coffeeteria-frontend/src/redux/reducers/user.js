const initialState = {
  msg: '',
  user: {},
  profile: {},
  profileTemp: {},
  isLoading: false,
  isError: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    // User: Sign Up
    case 'SIGN_UP_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'SIGN_UP_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    }
    case 'SIGN_UP_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    }
    // User: Sign In
    case 'SIGN_IN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'SIGN_IN_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        user: action.payload.data.data,
        isLoading: false,
        isError: false
      }
    }
    case 'SIGN_IN_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        user: {},
        isLoading: false,
        isError: true
      }
    }
    // Profile: Fetch
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        profile: action.payload.data.data[0],
        profileTemp: action.payload.data.data[0],
        isLoading: false,
        isError: false
      }
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        profile: {},
        profileTemp: {},
        isLoading: false,
        isError: true
      }
    }
    // Temp Profile: Change
    case 'CHANGE_PROFILE': {
      return {
        ...state,
        profileTemp: {
          ...state.profileTemp,
          ...action.payload
        }
      }
    }
    // Temp Profile: Reset
    case 'RESET_CHANGE': {
      return {
        ...state,
        profileTemp: state.profile
      }
    }
    // Profile: Update
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    }
    default: {
      return state
    }
  }
}
