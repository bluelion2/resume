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

export const Profile = (): JSX.Element => {
  const {
    printStyle: [styleOption],
  } = useContext<StoreValue>(StoreContext)

  return (
    <ProfileBox>
      <h1>
        안녕하세요. <br /> 프론트엔드 엔지니어 강승훈입니다.
      </h1>
      <p>
        저는 사용자의 입장에서 생각하는 개발자가 되고자 합니다. 보다 더 사용하기 편리한 방향으로
        개발하고자 합니다.
        <br /> 또한 내가 개발하는 서비스에 대해 깊게 이해할 수 있는 환경을 선호합니다.
        <br /> 다른 동료들과 소통하고 의견을 나누며, "혼자"가 아닌 "같이"를 선호합니다.
        <br />
        <br />
      </p>
      {!styleOption && (
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://seunghun89.notion.site/About-ME-13df0df48e634cc29b7314931f074434"
          >
            상세 내용 링크
          </a>
        </p>
      )}
    </ProfileBox>
  )
}
