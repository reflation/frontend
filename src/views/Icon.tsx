import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { darken_medium } from '../styles/colors'

export const User = () => (
  <FontAwesomeIcon color={darken_medium} icon={faUser} />
)

export const Lock = () => (
  <FontAwesomeIcon color={darken_medium} icon={faLock} />
)
