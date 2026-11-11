import React from 'react'
import styled from 'styled-components'
import { DESKTOP } from '../types'
import { skills } from '../data'

const SkillListSection = styled.section`
  width: 1024px;
  margin: 0.5rem auto;
  ${DESKTOP} {
    width: 90%;
  }
`

export const SkillList = () => {
  return (
    <SkillListSection>
      <h2>Skills</h2>
      <span>{skills.join(', ')}</span>
    </SkillListSection>
  )
}
