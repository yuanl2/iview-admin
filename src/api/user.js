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

export const getUserInfo = () => {
  return axios.request({
    url: '/ui/userinfo',
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
