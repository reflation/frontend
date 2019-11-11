import axios, { AxiosResponse } from 'axios'
import { TypeUser, TypeUserNoPw } from './@types/models'
import { getToken } from './utils'

const baseURL = 'http://localhost:4000/'

const request = axios.create({
  baseURL,
})

export const sendID = (
  mailid: string
): Promise<AxiosResponse<string | undefined>> =>
  request.post(
    'login',
    { mailid },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )

export const fetchData = (
  data: TypeUserNoPw
): Promise<AxiosResponse<TypeUser>> =>
  request.post('fetch', data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const loadData = (): Promise<AxiosResponse<TypeUser>> =>
  request.get('load', {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
