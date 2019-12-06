import { loadData } from './api'

export const loadContent = async () => {
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
