import axios from '@/libs/api.request'

export const getProvinceTableData = () => {
  return axios.request({
    url: '/api/provinces',
    method: 'get'
  })
}

export const getCityTableData = () => {
  return axios.request({
    url: '/api/citys',
    method: 'get'
  })
}

export const getAreaTableData = () => {
  return axios.request({
    url: '/api/locations',
    method: 'get'
  })
}

export const getConsumeTableData = () => {
  return axios.request({
    url: '/api/consumes',
    method: 'get'
  })
}

export const getDeviceTableData = (id) => {
  return axios.request({
    url: '/api/devices/',
    method: 'get',
    params: {
      userID: id
    }
  })
}

export const getFaultDeviceTableData = (id) => {
  return axios.request({
    url: '/api/devices/fault',
    method: 'get',
    params: {
      userID: id
    }
  })
}

export const getOrderStaticsTableData = (id, type, startTime, endTime) => {
  return axios.request({
    url: '/api/order/statics',
    method: 'get',
    params: {
      user: id,
      type: type,
      startTime: startTime,
      endTime: endTime
    }
  })
}

export const getOrderNotFinish = (id, startTime) => {
  return axios.request({
    url: '/api/order/notfinish',
    method: 'get',
    params: {
      user: id,
      startTime: startTime
    }
  })
}

export const getOrderInfo = (id, startTime) => {
  return axios.request({
    url: '/api/order/finish',
    method: 'get',
    params: {
      user: id,
      startTime: startTime
    }
  })
}

export const getSummaryInfo = (id) => {
  return axios.request({
    url: '/api/order/summary',
    method: 'get',
    params: {
      user: id
    }
  })
}

export const getOrderSummaryData = (id) => {
  return axios.request({
    url: '/api/order/summaryforhour',
    method: 'get',
    params: {
      user: id
    }
  })
}

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}
