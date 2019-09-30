import axiosDefault from 'axios'

import { SearchOrList } from '../types/common.d'

import { doFetch } from '../types/json.d'

const baseURL = 'http://localhost:4000'
const axios = axiosDefault.create({ baseURL })

export const FetchPoint = async (data: SearchOrList): Promise<doFetch> =>
  (await axios.post('', data)).data
