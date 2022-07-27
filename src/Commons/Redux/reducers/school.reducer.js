import { School } from '@mui/icons-material'
import {
  ADD_COMMENT,
  GET_LIST_STUDENT,
  SIGNUP_SCHOOL,
  UPDATE_SCHOOL,
} from '../constant'

const initial = {
  school: {},
}

export const SchoolReducer = (state = initial, action) => {
  const { payload, type } = action

  switch (type) {
    case SIGNUP_SCHOOL:
      return { ...state, school: payload }
    case UPDATE_SCHOOL:
      return { ...state, school: payload }
    case ADD_COMMENT:
      const comment = state?.school?.comments.push(payload)
      return { ...state.school, comments: comment }
    case GET_LIST_STUDENT:
      return { ...state.school, students_arrived: payload }
    default:
      return state
  }
}
