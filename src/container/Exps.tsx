import React from 'react';
import styled from 'styled-components';
import { Exp } from '../component';
import { IExpList } from '../interface/interface';

export const ExpContainer = styled.section`
    padding: 5% 10%;
    border: 1px solid black;
    background-color: white;
    color: black;
`

const ExpList: Array<IExpList> = [
    {
        name: '프리윌린',
        subtitle: "학생에게 맞춤형 수학문제를 제공할 수 있게 도움을 주는 매쓰플랫 웹을 개발하고 있습니다.",
        date: "2019.08 ~ 재직중",
        icon: "/assets/mathflat.png",
        project: [
            {
                title: "웹 매쓰플랫 개발 및 유지보수",
                date: "2019.08 ~ ",
                subtitle: '기존 웹에 더 추가된 기능개발을 해서 2019.11월에 배포하였습니다. 기존 서비스중인 앱과 동일한 기능을 제공하기 위해 기능 구현 및 유지보수를 같이 하고 있습니다.',
                link: 'https://my.mathflat.com',
                stack: ['React', 'Mobx', 'Redux', 'Sass', 'Typescript'],
                mywork: [
                    'Redux 기반 기존 상태관리를 Mobx로 변경하기',
                    '학생별 학습지를 관리하는 학습지, 교재 탭 개발',
                ],
            }
        ]
    },
    { 
        name: '(주) 열두달', 
        subtitle: '단체음식을 배송 하는 Fooding의 프론트엔드 개발자로 근무를 하면서 프론트엔드 UX 개선 및 내부적으로 필요한 Admin Page와 배송기사용 앱을 개발하였습니다.',
        date: '2018.10 ~ 2019.08',
        icon: '/assets/fooding.png',
        project: [
            { 
                title: 'Fooding Menu App 개발',
                date: '2019.06 ~ 2019.08',
                subtitle: '정기배송 서비스를 이용하는 고객들을 대상으로 메뉴를 안내하는 앱을 개발하고 있습니다. 사용자의 편의성을 위해 네이티브 개발이 필요해서 React Native를 이용해 개발을 진행하였습니다. 내부 사정으로 인해 프로젝트가 중단되었습니다.',
                link: '',
                stack: ['React native', 'Typescript', 'Mobx'],
                mywork: [
                    '프론트엔드 개발환경 셋팅', 
                    'Mobx를 이용한 스토어관리', 
                    'React Native를 통한 모바일 앱 개발'
                ],
            },
            { 
                title: 'Fooding Delivery App 개발', 
                date: '2019.02 ~ 2019.03', 
                subtitle: '배송 서비스를 원활하게 진행하기 위해 내부 배송기사용 앱을 개발했습니다. 많은 기능이 필요하지 않고, 빠른 시간 내에 개발해야 했기 때문에 Ionic4를 이용해서 개발을 하여 배포했습니다.',
                link: 'https://play.google.com/store/apps/details?id=app.fooding.delivery',
                youtube: 'https://www.youtube.com/embed/_tYefWU1kzY',
                stack: ['Ionic4', 'Typescript', 'Scss'],
                mywork: [
                    '프론트엔드 개발환경 셋팅 및 전체 기능 구현과 배포',
                ],
            },
            { 
                title: 'Fooding 개발 및 유지보수', 
                date: '2018.10 ~ 2019.02', 
                subtitle: '외주로 부터 개발된 fooding.io 를 개선하는 작업을 진행하였습니다. 요청에 따라 사이트 내 정기배송 소개페이지 등 추가 개발도 진행하였습니다. 이와 관련해서 개선하기 위한 간단한 발표도 해보았습니다.',
                link: 'https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_',
                stack: ['Angular7', 'Typescript', 'Scss'],
                mywork: [
                    '프론트엔드 기술 환경 개선 및 기능 추가', 
                    'Code split, lazy loading을 통한 초기 로딩속도 개선',
                    '중복되는 함수 및 변수들을 제거 및 Module 분리관리'
                ],
            },
            { 
                title: 'Admin Page 제작', 
                date: '2018.10 ~ 2018.12', 
                subtitle: '푸딩 웹사이트를 관리하기 위한 Admin Page 개발 및 유지보수를 담당했습니다. 기획안에 기능 외에는 따로 디자인을 준비하지 않아서 Angular Material을 이용하여 디자인을 하였습니다. 완성 후 추가적인 개발 요청이 들어올 때마다 진행되었습니다.',
                stack: ['Angular7', 'Typescript', 'Scss'],
                mywork: [
                    '프론트엔드 개발환경 셋팅 및 전체기능 구현',
                    '반응형으로 구현하여 데스크탑 및 테블릿 사용지원',
                    'Chart.js를 이용한 차트사용'
                ] 
            },
        ],
    },
    { 
        name: '(주) 리브햇', 
        subtitle: '(주)투어벨의 개발을 담당하는 자회사인  (주)리브햇의 개발팀 신입으로 투어벨의 모바일 사용자를 위한 모바일 웹 개발을 진행하였습니다.',
        date: '2018.07 ~ 2019.09', 
        icon: '/assets/tourbell.png',
        project: [
            { 
                title: 'Tourbell 모바일 웹 개발', 
                date: '2018.07 ~ 2018.09', 
                subtitle: '모바일로 패키지 예약하는 고객을 위해 개발된 모바일 웹 입니다. 1차 개발 중반부터 참여를 시작하였으며, 풀스택 개발자 한분과 같이 작업하였습니다. 기존 기획안을 바탕으로 개발하면서 소셜 로그인을 통한 고객의 예약환경 향상을 건의 및 추가하였습니다.', 
                link: 'https://m.tourbell.co.kr',
                stack: ['Ionic3', 'Scss', 'Typescript'],
                mywork: [
                    '카카오, 네이버, 페이스북 소셜 로그인 연동을 통한 고객의 접근성을 높였습니다.',
                    '회원가입 및 비밀번호 변경, 마이페이지, 쿠폰 페이지, 기획전, 이벤트 페이지 개발',
                    '예약 신청 flow 관련 페이지 제작 (예약 신청 및 예약 폼, 완료 페이지)'
                ],
            },
        ],
    },
]

export const Exps = (): JSX.Element => {
    return (
        <ExpContainer>
            <h2>Experience</h2>
            {ExpList.map(item => {
                return <Exp career={item} key={item.name}/>
            })}
        </ExpContainer>
    )
}