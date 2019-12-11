import qs from 'querystring'

export const saveToken = () => {
  localStorage.setItem('token', qs.parse(window.location.search)[
    '?token'
  ] as string)
}

export const tokenDelete = () => localStorage.removeItem('token')

export const getToken = () => localStorage.getItem('token')

export function count<T>(array: T[], itm: T) {
  return array.filter(x => x === itm).length
}

const reduce = (pre: number, curr: number) => pre + curr

export const sumArray = (arr: number[]) => arr.reduce(reduce)
