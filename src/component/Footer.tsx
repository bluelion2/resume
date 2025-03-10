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
            Github:{' '}
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/bluelion2">
              https://github.com/bluelion2
            </a>
          </li>
          {/* <li>
            Blog:{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://bluelion2-github-io-ptkq.vercel.app"
            >
              bit.ly/3VGpzaw
            </a>
          </li> */}
          <li>
            resume:
            <a rel="noopener noreferrer" target="_blank" href="https://resume.sh89.now.sh">
              https://resume.sh89.now.sh
            </a>
          </li>
          <li>
            Mail: <a href="mailto:iltk2000@gmail.com">iltk2000@gmail.com</a>
          </li>
          <li>
            Portfolio:
            <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3Ho8Dy0">
              https://bit.ly/3Ho8Dy0
            </a>
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
      </ul>
    </FooterBox>
  )
}
