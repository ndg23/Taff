import { login, signupSchool } from '../../api'
import { SIGNIN_USER, SIGNUP_SCHOOL } from '../constant'

export const actionLogin = (data) => {
  return (dispatch) => {
    const res = login(data)
    dispatch({
      type: SIGNIN_USER,
      payload: res,
    })
    return res
  }
}


export const actionSignupSchool = (data) => {
  return (dispatch) => {
    const res = signupSchool(data)
    dispatch({
      type: SIGNUP_SCHOOL,
      payload: res,
    })
    return res
  }
}

