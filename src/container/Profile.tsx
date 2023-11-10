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
        저의 지향점은, 사용자를 생각하는 개발자가 되고자 하는 것 입니다. 개발할 때, 사용자가 어떻게
        사용할 지에 대해서 한번 더 생각하고, 기획에 없더라도 저의 의견을 제시해, 보다 더 사용하기
        편리한 방향으로 개발하고자 합니다. 누구든 이해하기 쉽도록 코드를 작성하려 하고, 생산적인
        코드리뷰를 통해 어떻게 하면 더 좋은 코드가 될 수 있을지 공유하고자 합니다.
        <br />
        <br />
        새로운 기술에 대해 호기심을 갖고 있습니다. 외부 행사에 적극적으로 참여해서 느낀점을 정리하고
        같이 공유하기를 좋아합니다. 다른 동료들과 솔직하게 소통하고 의견을 청취하려 하며 "혼자"가
        아닌 "같이"를 선호합니다.
        <br />
        <br />
        또한 다른 엔지니어 뿐만 아니라 비개발자 동료들과의 원활한 협업을 위해 소통하길 좋아하고,
        개발의 완벽함과 비즈니스 가치를 동시에 쟁취하기 위해 노력합니다. 단순히 업무를 하는 것이
        아닌, 보다 적극적으로 기획에 참여하고 아이디어를 제시할 수 있는 환경을 선호합니다.
      </p>
      {!styleOption && (
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://bit.ly/3Ho8Dy0">
            포트폴리오 링크
          </a>
        </p>
      )}
    </ProfileBox>
  )
}
