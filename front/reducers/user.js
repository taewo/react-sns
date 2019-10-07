const dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  signupData: {},
}

export const initialState = {
  isLoggedIn: false,
  user: null
}

export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'   //  액션의 이름
export const LOG_OUT = 'LOG_OUT'

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  }
}

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'zerocho'
  }
}

export const logoutAction = {
  type: LOG_OUT
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        signupData: action.data,
      }
    }
    default: 
      return {
        ...state
      }
  }
}

export default reducer