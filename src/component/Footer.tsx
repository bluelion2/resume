import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext, StoreValue } from '../store'

const FooterBox = styled.footer`
  background-color: #f0f0f0;
  padding: 5%;
  a {
    color: black;
  }
`

const UlBox = styled.footer`
  ul {
    list-style: none;
    margin-right: 50px;
    text-align: end;
  }
`

export const Footer = (): JSX.Element | null => {
  const {
    printStyle: [styleOption],
  } = useContext<StoreValue>(StoreContext)
  if (styleOption)
    return (
      <UlBox>
        <ul>
          <li>
            Github: <a href="https://github.com/bluelion2">https://github.com/bluelion2</a>
          </li>
          <li>
            resume: <a href="https://resume.sh89.now.sh">https://resume.sh89.now.sh</a>
          </li>
          <li>
            Mail: <a href="mailto:iltk2000@gmail.com">iltk2000@gmail.com</a>
          </li>
        </ul>
      </UlBox>
    )
  return (
    <FooterBox>
      <h2>Contact</h2>
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bluelion2">
            Github
          </a>
        </li>
        <li>
          <a href="mailto:iltk2000@gmail.com" rel="noopener noreferrer">
            이메일
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Hun89">
            페이스북
          </a>
        </li>
      </ul>
    </FooterBox>
  )
}
