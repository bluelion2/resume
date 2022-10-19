import React from 'react'
import styled from 'styled-components'
import { Exps } from './Exps'
import { Extras } from './Extras'

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5vh;
`

export const Main = (): JSX.Element => {
  return (
    <MainContainer>
      <Exps />
      <Extras />
    </MainContainer>
  )
}
