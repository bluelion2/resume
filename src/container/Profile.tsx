import React from 'react';
import styled from 'styled-components';
import { TABLET } from '../types';

const ProfileBox = styled.div`
    padding: 5% 10%;
    background-color: white;
    color: black;
`

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;

    p {
        color: black;
    }
    img {
        flex: 0 0 120px;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin: 0 20px 20px 0 ;
        background-size: contain;
    }
  
    ${TABLET} {
        flex-direction: column;
    }
`

export const Profile = (): JSX.Element => {
    return (
        <ProfileBox>
            <h2>Profile</h2>
            <ProfileInfo>
                <img src="./assets/profile.jpeg" alt="본인 사진입니다."/>
                <p>
                    반갑습니다. 프론트엔드 엔지니어 강승훈입니다.
                    최근 리액트와 타입스크립트를 이용한 리액트, 리액트 네이티브 개발을 하고 있습니다.
                    현재 서울에서 1년차 웹 프론트엔드 엔지니어로 일하고 있습니다.
                    <br />
                    <br />
                    저의 지향점은, 사용자를 생각하는 개발자가 되고자 하는 것 입니다.
                    개발할 때, 사용자가 어떻게 사용할 지에 대해서 한번 더 생각하고, 기획에 없더라도 저의 의견을 제시해, 보다 더 사용하기 편리한 방향으로 개발하고자 합니다.
                    또한 협업하는 개발자와 함께 작성한 코드를 공유하면서, 어떻게 하면 더 깔끔한 코드가 될 수 있을지 생각하고자 합니다.
                    <br/>
                    <br/>
                    또한 다른 엔지니어 뿐만 아니라 비개발자 동료들과의 원활한 협업을 위해 소통하길 좋아하고, 개발의 완벽함과 비즈니스 가치를 동시에 쟁취하기 위해 노력합니다. 
                    단순히 업무를 하는 것이 아닌, 보다 적극적으로 기획에 참여하고 아이디어를 제시할 수 있는 환경을 선호합니다.
                </p>
            </ProfileInfo>
        </ProfileBox>
    )
}