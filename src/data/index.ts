import { Skill } from '../interface/type'
import { IExpList } from '../interface/type'

export const ExpList: Array<IExpList> = [
  {
    name: '프리윌린',
    subtitle:
      '수학교육을 위한 B2B 모바일 솔루션 매쓰플랫 서비스의 선생님앱 웹 버전을 개발하고 있습니다.',
    date: '2019.08 ~ 재직중',
    icon: '/assets/mathflat.png',
    project: [
      {
        title: '매쓰플랫 신규 프로젝트 개발',
        date: '2020.07 ~ 진행중',
        worker: 4,
        subtitle: `기존 웹 매쓰플랫의 디자인, DB설계등 여러 이슈로 인해, DB부터 해서 서비스 전체를 갈아엎고 새롭게 만드는 프로젝트 입니다. 기존 서비스는 최소한의 유지보수만 하면서,  불편했던 점들을 개선하고 기존기능에 더불어서 신규 기능 더하는 개발 프로젝트입니다.`,
        stack: ['React', 'Mobx', 'EmotionJS', 'Storybook', 'Typescript'],
        mywork: [
          '웹 매쓰플랫의 핵심기능인 학습지만들기와 교재만들기 기능 전체를 담당했습니다.',
          '안드로이드 앱 내부에 일부 페이지가 웹뷰로 들어감으로써 기능별 분기처리를 할 수 있는 공통함수와 인증하는 작업을 담당했습니다.',
          '프론트엔드 파트에서 전체 일정 및 진행사항을 관리하고 다른파트와 조율하는 역할을 담당했습니다.',
        ],
      },
      {
        title: '웹 매쓰플랫 개발 및 유지보수',
        date: '2019.08 ~ 2020.06',
        worker: 4,
        subtitle: `안드로이드 태블릿앱 '매쓰플렛'과 같은 기능을 웹에서 지원하기 위한 팀프로젝트를 진행하고 있습니다. 기존 1차 개발 중반에 참가를 하여 현재까지 진행중이며, 먼저 개발된 기능의 코드 리팩토링을 하고 있습니다.`,
        stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
        mywork: [
          '상태관리 라이브러리인 Redux thunk와 Mobx를 두개 쓰고 있었던 것을 Mobx 하나만 쓰는것으로, 타입스크립트를 도입해서 리팩토링을 진행했습니다.',
          '핵심 서비스 중 하나인 교재만들기 기능 개발을 하였습니다.',
          '서비스 정책과 기능 개발 히스토리 문서화가 부족하다 생각해서, 개발하면서 틈틈히 정리했습니다.',
        ],
        memory: [
          '진행중인 프로젝트에서, 레거시 코드의 개선과 기능 개발의 두마리 토끼를 잡는다는 것이 어렵다는 것을 느꼈습니다.',
          'IE와, 성능이 낮은 컴퓨터(window7같은..)를 사용하는 고객이 많아 최적화를 염두해야 한다는 점을 생각하는 프로젝트였습니다.',
        ],
      },
    ],
  },
  {
    name: '(주) 열두달',
    subtitle:
      '단체음식을 배송 하는 Fooding의 프론트엔드 개발자로 근무를 하면서 쇼핑사이트 유지보수와 내부적으로 필요한 Admin Page, 배송기사용 앱을 개발하였습니다.',
    date: '2018.10 ~ 2019.07',
    icon: '/assets/fooding.png',
    project: [
      {
        title: 'Fooding Delivery App 개발',
        date: '2019.02 ~ 2019.03',
        worker: 2,
        subtitle:
          '배송 서비스를 진행하기 위해 내부 배송기사용 앱의 개발이 필요했습니다. 빠른 시간 내에 개발해서 사용해야 했기 때문에, 사내 기술스택과 제일 맞는 Ionic4를 이용해서 개발을 하였습니다. ',
        link: 'https://play.google.com/store/apps/details?id=app.fooding.delivery',
        youtube: 'https://www.youtube.com/embed/_tYefWU1kzY',
        stack: ['Ionic4', 'Sass'],
        mywork: [
          '프론트엔드 개발환경 셋팅 및 전체 기능 구현을 했습니다. 자동로그인, 주문의 상태에 따른 스텝 표시 및 이동, Routing 및 안드로이드 테블릿과 모바일에 맞게 구현하였습니다.',
        ],
      },
      {
        title: 'Fooding 웹서비스 개발 및 유지보수',
        date: '2018.10 ~ 2019.07',
        worker: 1,
        subtitle:
          '외주로 부터 개발된 fooding.io 를 인계받아 개선하는 작업을 진행하였습니다. 요청에 따라 사이트 내 정기배송 소개페이지 등 추가 개발도 진행하였습니다. 이와 관련해서 개선하기 위한 경험을 간단히 발표해 해보았습니다.',
        link: 'https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_',
        youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
        stack: ['Angular7', 'Sass'],
        mywork: [
          '초기 로딩속도가 느린점을 극복하기 위해 하나의 Root에서 모든것을 처리하던 구조에서, 초기에 필요하지 않은 모듈 및 라이브러리들을 지연로딩하는 방법으로 개선하였습니다.',
          '새롭게 추가된 정기배송 신청 서비스를 위한 페이지 추가를 했습니다.',
        ],
      },
      {
        title: 'Fooding Admin 웹서비스 개발',
        date: '2018.10 ~ 2018.12',
        worker: 1,
        subtitle: `푸딩 웹사이트를 관리하기 위한 Admin Page 개발 및 유지보수를 담당했습니다. 기획안에 기능 외에는 따로 디자인을 준비하지 않아서 Angular Material을 이용하여 디자인을 하였습니다. 백엔드 개발자 한분과 같이 작업을 하였고, 완성 후 추가적인 개발 요청이 들어올 때마다 진행되었습니다.`,
        stack: ['Angular7', 'Sass'],
        youtube: 'https://www.youtube.com/embed/jeXTYYE-4JU',
        mywork: [
          '프론트엔드 개발환경 셋팅, 그리고 데스크랍과 테블릿 반응형 작업등 전체 기능을 구현했습니다.',
          'Chart, 엑셀 변환 등 내부 팀원들의 요구사항에 맞는 기능들을 개발해서 제공했습니다.',
        ],
      },
    ],
  },
]

export const details = {
  html: [
    '시멘틱 마크업을 준수하기 위해 노력합니다.',
    '크로스 브라우징 및 반응형을 구현 할 수 있습니다.',
    'Sass, css-in-js (styled-component) 등의 방법을 활용할 수 있습니다.',
  ],
  js: [
    'ES5, ES6 문법에 익숙하고, 최신 문법에 관심을 가지고 있습니다.',
    '타입스크립트를 주로 사용하려고 합니다.',
  ],
  react: [
    '적당한 컴포넌트 분리와 재사용성에 대해 고민합니다.',
    '불필요한 렌더링을 최소화 하기위해 노력합니다.',
    'Mobx를 이용해 상태관리를 할 수 있습니다.',
    'Redux의 개념과 사용 방법을 알고 있습니다.',
  ],
  angular: [
    '공식 문서에서 지향하는 컴포넌트와 서비스 분리 방법으로 개발하려 합니다.',
    'SPA의 동작방법에 대해 이해하고 있습니다.',
  ],
}

export const Current: Skill[] = [
  { name: 'HTML & CSS', url: '/assets/html.png', detail: details['html'] },
  { name: 'Javascript', url: '/assets/js.png', detail: details['js'] },
  { name: 'Typescript', url: '/assets/ts.png' },
  {
    name: 'Styled Component',
    url: '/assets/styled.png',
  },
  { name: 'Sass', url: '/assets/sass.png' },
  { name: 'React', url: '/assets/react.png', detail: details['react'] },
  { name: 'Angular', url: '/assets/angular.png', detail: details['angular'] },
  { name: 'Mobx', url: '/assets/mobx.jpeg' },
]

export const Prev: Skill[] = [
  { name: 'Ionic', url: '/assets/ionic.jpeg' },
  { name: 'Redux', url: '/assets/Redux.png' },
  { name: 'Rxjs', url: '/assets/rxjs.png' },
  { name: 'Jest', url: '/assets/jest.png' },
  { name: 'StoryBook', url: '/assets/storybook.png' },
  { name: 'Figma', url: '/assets/figma.png' },
]

export const Extra = [
  {
    name: '패스트캠퍼스 프론트엔드 스쿨 과정',
    date: '2018-01 ~ 2018-04',
    status: '수료',
  },
  {
    name: '바리스타 및 카페 매니저 근무',
    date: '2012.03 ~ 2017.08',
    status: '바리스타 및 카페 매니저로 커피업계에서 5년 가까이 일을 했습니다.',
  },
  { name: '한남대학교', date: '2008.02 ~ 2011.09', status: '교육학과 중퇴' },
]
