import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/ui/login',
    params: {
      username: userName,
      password: password
    },
    method: 'get'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/ui/get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
