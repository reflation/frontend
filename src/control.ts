import { loadData } from './api'
import { TypeLoad } from './types/state'

export const loadContent = async (): Promise<TypeLoad> => {
  const { status, data } = await loadData()
  return {
    status,
    data,
  }
}

type OptionalNumber = number | undefined

// FF: High Order Function
export const isCodeFF = (status: OptionalNumber) => (code: OptionalNumber) =>
  status === code
