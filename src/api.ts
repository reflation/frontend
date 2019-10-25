import axios, { AxiosResponse } from 'axios'

const baseURL = 'http://localhost:4000/'

const request = axios.create({
  baseURL,
})

export const sendID = (id: string): Promise<AxiosResponse<string>> =>
  request.post('login', id, {
    headers: { 'Content-Type': 'text/plain' },
  })
