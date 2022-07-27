import axios from 'axios'

export const login = async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER}/user/login`,data)
    return res.data
  } catch (error) {}
}

export const signupSchool= async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER}/school/create`,data)
    return res.data
  } catch (error) {}
}


export const updateSchool = async (data) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_SERVER}/school/update`,data)
    return res.data
  } catch (error) {}
}

