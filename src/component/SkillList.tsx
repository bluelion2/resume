import React from 'react'
import styled from 'styled-components'
import { SkillItem } from './SkillItem'
import { Skill } from '../interface/type'
import { TABLET } from '../types'

const SkillListSection = styled.section`
  width: 1024px;
  margin: 0 auto;
  ${TABLET} {
    width: 90%;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ styleOption }: { styleOption: boolean }) => (styleOption ? 'column' : null)};
`

type Props = {
  title: string
  list: Skill[]
  styleOption: boolean
}

export const SkillList = ({ title, list, styleOption }: Props) => {
  return (
    <SkillListSection>
      <h3>{title}</h3>
      <List styleOption={styleOption}>
        {styleOption
          ? list.map(
              (item: Skill) =>
                item.detail && (
                  <ul key={item.name}>
                    {item.name}
                    {item.detail.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )
            )
          : list.map((item: Skill, index) => (
              <SkillItem name={item.name} url={item.url} key={item.name} />
            ))}
      </List>
    </SkillListSection>
  )
}
