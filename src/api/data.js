import axios from '@/libs/api.request'

export const getProvinceTableData = () => {
  return axios.request({
    url: 'http://localhost:8080/hsservice/api/provinces',
    method: 'get',
    auth: {
      username: 'admin',
      password: '123456'
    }
  })
}

export const getCityTableData = () => {
  return axios.request({
    url: 'http://localhost:8080/hsservice/api/citys',
    method: 'get',
    auth: {
      username: 'admin',
      password: '123456'
    }
  })
}

export const getAreaTableData = () => {
  return axios.request({
    url: 'http://localhost:8080/hsservice/api/areas',
    method: 'get',
    auth: {
      username: 'admin',
      password: '123456'
    }
  })
}

export const getConsumeTableData = () => {
  return axios.request({
    url: 'http://localhost:8080/hsservice/api/consumes',
    method: 'get',
    auth: {
      username: 'admin',
      password: '123456'
    }
  })
}

export const getDeviceTableData = (id) => {
  return axios.request({
    url: 'http://localhost:8080/hsservice/api/devices/',
    method: 'get',
    params: {
      userID: id
    },
    auth: {
      username: 'admin',
      password: '123456'
    }
  })
}

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}
