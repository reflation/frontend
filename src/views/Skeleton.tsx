import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`

export const Skeleton = styled(SkeletonPulse)`
  &::before {
    content: '\00a0';
  }
`

export const SkeletonCircle = styled(Skeleton)`
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const SkeletonLineChart = styled(Skeleton)`
  width: 100%;
  height: 150px;
  border-radius: 5px;
`

export const SkeletonTable = styled(Skeleton)`
  width: 100%;
  height: 122px;
`
