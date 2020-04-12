import React from 'react'
import axios from 'axios'
import {
  message
} from 'antd'

// 创建一个axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000, // 超时时间
  withCredentials: true // 允许携带cookie
})

// 请求发送处理
service.interceptors.request.use(
  config => {
    // if (getToken()) {
    // config.headers['Authorization'] = 'Bearer ' + getToken() // 请求携带自定义token
    // }
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    // message.loading('loadding..')
    message.config({
      top: 260
    })
    return config
  },
  error => {
    // message.destroy()
    Promise.reject(error)
  }
)
// 响应结果
service.interceptors.response.use(
  response => {
    const code = response.status
    // message.destroy()
    if (code < 200 || code > 300) {
      message.info(response.detail)
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    // message.destroy()
    if (error && error.response) {
      return Promise.reject(error.response)
    } else {
      error.message = '连接到服务器失败'
    }
    message.info(error.message)
    return Promise.reject(error.response)
  }
)

export default service