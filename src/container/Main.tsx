import React, { useContext } from 'react'
import styled from 'styled-components'
import { SkillList } from '../component'
import { Exps } from './Exps'
import { Current, Prev } from '../data'
import { StoreContext, StoreValue } from '../store'
import { Extras } from './Extras'

const Skill = [
  { title: 'Skill', list: Current },
  { title: '최근 관심이 있거나, 사용한 경험이 있는 기술입니다.', list: Prev },
]
const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5vh;
`

export const Main = (): JSX.Element => {
  const {
    printStyle: [styleOption],
  } = useContext<StoreValue>(StoreContext)
  return (
    <MainContainer>
      <Exps />
      {styleOption && (
        <SkillList list={Skill[0].list} title={Skill[0].title} styleOption={styleOption} />
      )}
      <Extras />
    </MainContainer>
  )
}
