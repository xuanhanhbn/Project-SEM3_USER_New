import React from 'react'
import axios from 'axios'
import { baseApi } from './constant'

const baseApiUrlUser = `${baseApi}/`

const baseInstance = axios.create({
  baseURL: baseApiUrlUser
})

baseInstance.interceptors.request.use(
  async config => {
    try {
      const getLoginData = await localStorage.getItem('loginData')
      if (getLoginData !== undefined && config.headers) {
        config.headers.Authorization = `Bearer ${getLoginData}`
      } else {
        return
      }
    } catch (error) {
      config.validateStatus = status => status < 500
    }
  },
  error => Promise.reject(error)
)

baseInstance.defaults.timeout = 60000

export default baseInstance
