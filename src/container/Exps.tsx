import React from 'react'
import styled from 'styled-components'
import { Exp } from '../component'
import { ExpList } from '../data'
import { DESKTOP } from '../types'

export const ExpContainer = styled.section`
  width: 1024px;
  margin: 0 auto;
  ${DESKTOP} {
    width: 90%;
  }
`

export const Exps = (): JSX.Element => {
  return (
    <ExpContainer>
      <h2>Work Experience</h2>
      {ExpList.map((exp, index) => (
        <Exp career={exp} key={`${exp.name}-${index}`} />
      ))}
    </ExpContainer>
  )
}
