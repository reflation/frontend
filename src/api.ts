import axios, { AxiosResponse } from 'axios'
import { User, UserNoPw } from './types/models'
import { getToken } from './utils'

const baseURL = 'http://localhost:4000/'
const request = axios.create({ baseURL })

export const checkMailAddress = async (mailid: string) =>
  (await request.post(
    'login',
    { mailid },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )).status === 201

export const savePointToServer = async (data: UserNoPw) =>
  (await request.post('fetch', data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })).status === 201

export const loadData = (): Promise<AxiosResponse<User>> =>
  request.get('load', {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
