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
        저는 사용자를 생각하는 개발자가 되고자 합니다. 개발할 때, 사용자가 어떻게 사용할 지에 대해서
        한번 더 생각하고, 기획에 없더라도 저의 의견을 제시해, 보다 더 사용하기 편리한 방향으로
        개발하고자 합니다. 또한 단순히 요청사항을 대하는 것이 아닌, 내가 개발하는 서비스에 대해 깊게
        이해할 수 있는 환경을 선호합니다.
        <br />
        <br />
        누구든 이해하기 쉽도록 코드를 작성하려 하고, 생산적인 코드리뷰를 통해 어떻게 하면 더 좋은
        코드가 될 수 있을지 공유하고자 합니다. 새로운 기술에 대해 호기심을 갖고 있습니다. 다른
        동료들과 솔직하게 소통하고 의견을 청취하려 하며 "혼자"가 아닌 "같이"를 선호합니다.
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
