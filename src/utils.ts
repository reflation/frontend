import qs from 'querystring'

export const saveToken = () => {
  localStorage.setItem('token', qs.parse(window.location.search)[
    '?token'
  ] as string)
}

export const getToken = () => localStorage.getItem('token')
