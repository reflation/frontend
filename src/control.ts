import { sendID, loadData } from './api'
import { TypeLoad } from './types/state'
import { fetchData } from './api'
import { UserNoPw } from './types/models'

export const submitID = async (mailid: string) => {
  try {
    return (await sendID(mailid)).status === 201
  } catch (e) {
    if (e.message.includes('401')) return false
    throw e
  }
}

export const loadContent = async (): Promise<TypeLoad> => {
  const { status, data } = await loadData()
  return {
    status,
    data,
  }
}

export const fetchConent = async (data: UserNoPw): Promise<number> => {
  const { status } = await fetchData(data)
  return status
}

type OptionalNumber = number | undefined

// FF: High Order Function
export const isCodeFF = (status: OptionalNumber) => (code: OptionalNumber) =>
  status === code
