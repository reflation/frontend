import styled from 'styled-components'
import { mainBoxShadow, white } from '../styles/colors'

export const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const BoxTemplate = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 15px 19px 32px -18px ${mainBoxShadow};
  background-color: ${white};
`
