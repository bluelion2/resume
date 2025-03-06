import React from 'react'
import styled from 'styled-components'
import { SkillItem } from './SkillItem'
import { Skill } from '../interface/type'
import { DESKTOP } from '../types'
import { skills } from '../data'

const SkillListSection = styled.section`
  width: 1024px;
  margin: 0.5rem auto;
  ${DESKTOP} {
    width: 90%;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SkillList = () => {
  return (
    <SkillListSection>
      {/* <h2>Skills</h2>
      <span>
        HTML, CSS, JavaScript, TypeScript, React.js, MobX, Emotion, Storybook, Jest, Cypress,
        Webpack
      </span> */}
      {/* <List>
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
      </List> */}
    </SkillListSection>
  )
}
