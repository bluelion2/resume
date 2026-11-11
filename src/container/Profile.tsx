import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext, StoreValue } from '../store'
import { DESKTOP } from '../types'

const ProfileBox = styled.header`
  width: 1024px;
  margin: 3vw auto;
  padding: 0 1vw;
  ${DESKTOP} {
    width: 90%;
  }
`

export const Profile = (): React.JSX.Element => {
  const {
    printStyle: [styleOption],
  } = useContext<StoreValue>(StoreContext)

  return (
    <ProfileBox>
      <h1>
        안녕하세요. <br /> 개발자 강승훈입니다.
      </h1>
      <p>
        저는 사용자의 입장에서 생각하는 개발자가 되고자 합니다. 또한 보다 편리하게 사용할 수 있는
        방향으로 개발하고자 합니다.
        <br />
        또한 제가 개발하는 서비스를 깊이 이해하고, 의견을 제시할 수 있는 환경을 선호합니다.
        <br /> 간단히 논의된 내용이라도 기록하고, 히스토리를 파악해 서비스의 흐름을 찾는 것을
        좋아합니다.
        <br />
        <br />
      </p>
      <p>
        <a href="/career/">경력기술서</a>
      </p>
    </ProfileBox>
  )
}
