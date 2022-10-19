import { IExpList } from '../interface/type'

export const ExpList: Array<IExpList> = [
  {
    name: '프리윌린',
    subtitle:
      '수학교육을 위한 B2B 모바일 솔루션 `매쓰플랫` 서비스의 웹 버전을 개발하고 있습니다. 프론트엔드 파트에서 전체 일정 및 진행사항을 관리하고 다른파트와 조율하는 역할을 담당했습니다.',
    date: '2019.08 ~ 재직중',
    icon: '/assets/mathflat.png',
    project: [
      {
        title: '매쓰플랫 프로젝트 고도화',
        date: '2022.07 ~ 진행중',
        worker: 1,
        subtitle:
          '비즈니스 성장을 위해 사용자들이 원하는 기능들 일부를 개선하거나 추가로 개발하는 작업을 진행하고 있습니다. ',
        stack: ['Github Action', 'Vite', 'Jira', 'ETC..'],
        mywork: [
          '자동화를 위한 Jira Automation, Github Action을 개발해서 팀 내 생산성 향상에 기여하고 있습니다. ',
          '개발 환경을 개선하기 위해서 기존 CRA환경에서 Vite로 변환하는 작업을 했습니다.',
        ],
      },
      {
        title: '출석 서비스 웹 개발',
        date: '2020.11',
        worker: 1,
        subtitle: `학원에 학생들이 출석을 하면, 출석 기록을 남기고 학부모에게 문자를 전달하는 웹서비스를 개발했습니다. 기존에 있던 네이티브앱을 대체하는 프로젝트로써 디자인이나 기획이 따로 없이 혼자서 개발했습니다.`,
        stack: ['React', 'Typescript', 'Mobx', 'Scss', 'Webpack'],
        mywork: [
          '프론트엔드 개발 환경 셋팅 및 전체 기능을 구현하였습니다.',
          'Cypress E2E테스트를 통해 주요 사용패턴에서 정상동작하는지 주기적으로 확인합니다.',
        ],
      },
      {
        title: '매쓰플랫 신규 프로젝트 개발',
        date: '2020.07 ~ 2022.06',
        worker: 6,
        subtitle: `기존 웹 매쓰플랫의 디자인과 DB설계등 이슈로 인해, DB부터 해서 서비스 전체를 갈아엎고 새롭게 만드는 프로젝트 입니다. 기존 서비스는 최소한의 유지보수만 하면서, 불편했던 점들을 개선하고 기존기능에 더불어서 신규 기능 더하는 개발 프로젝트입니다.
        \r\n 팀 내 사정으로 인해 일정과 목표가 자주 변경되면서  1년 반 가까이 진행되었고, 21년 10월에 클로즈베타, 22년 1월에 오픈베타를 진행하였습니다. 3월부터 구 버전 사용자 전체 전환을 시작해서 22년 6월에 끝내는 것을 목표로 하고 있습니다.
        `,
        stack: ['React', 'Mobx', 'EmotionJS', 'Storybook', 'Typescript', 'Cypress'],
        mywork: [
          '프론트엔드 파트리드를 맡아 일감 분배와 전체 일정 및 진행사항을 관리하고 다른파트와 조율하는 역할을 담당했습니다.',
          '웹 매쓰플랫의 핵심기능인 학습지만들기와 교재만들기 기능 전체를 담당했습니다.',
          'Cypress E2E테스트를 통해 주요 사용패턴에서 정상동작하는지 주기적으로 확인합니다.',
          'Storybook을 이용해 디자이너와 디자인 시스템을 구축하는 작업을 했습니다.',
          '안드로이드 앱 내부에 일부 페이지가 웹뷰로 들어감으로써 기능별 분기처리를 할 수 있는 공통함수와 인증하는 작업을 담당했습니다. (프로젝트 중간에 통 웹뷰로 바뀌게 되면서 폐기 되었습니다.)',
        ],
      },
      {
        title: '웹 매쓰플랫 개발 및 유지보수',
        date: '2019.08 ~ 2020.06',
        worker: 4,
        subtitle: `안드로이드 태블릿앱 '매쓰플렛'과 같은 기능을 웹에서 지원하기 위한 팀프로젝트를 진행하고 있습니다. 기존 1차 개발 중반에 참가를 하여 19년 10월에 1차 출시 20년 3월에 그랜드오픈을 하였습니다.
        신규 프로젝트를 진행하면서 몇몇 기능을 추가 또는 유지보수를 하고 있습니다.`,
        stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
        mywork: [
          '기존 프로젝트가 상태관리 라이브러리인 Redux thunk와 Mobx를 두개 쓰고 있었는데, Mobx 하나로 정리하며 리팩토링을 진행했습니다.',
          '핵심 서비스 중 하나인 학습지만들기 기능을 개발을 하였습니다.',
          '서비스 정책과 기능 개발 히스토리 문서화가 부족하다 생각해서, 개발하면서 Notion에 틈틈히 정리하고 공유하였습니다.',
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
        title: 'Fooding Delivery App 개발 (현재 서비스되지 않음)',
        date: '2019.02 ~ 2019.03',
        worker: 2,
        subtitle:
          '배송 서비스를 진행하기 위해 내부 배송기사용 앱의 개발이 필요했습니다. 빠른 시간 내에 개발해서 사용해야 했기 때문에, 사내 기술스택과 제일 맞는 Ionic4를 이용해서 개발을 하였습니다. 현재는 앱이 내려가있는 상태입니다. ',
        link: 'https://play.google.com/store/apps/details?id=app.fooding.delivery',
        youtube: 'https://www.youtube.com/embed/_tYefWU1kzY',
        stack: ['Ionic 4', 'Sass'],
        mywork: [
          '프론트엔드 개발환경 셋팅 및 전체 기능 구현을 했습니다. 자동로그인, 주문의 상태에 따른 스텝 표시 및 이동, Routing 및 안드로이드 테블릿과 모바일에 맞게 반응형으로 구현하였습니다.',
        ],
      },
      {
        title: 'Fooding Admin 웹서비스 개발',
        date: '2018.10 ~ 2018.12',
        worker: 1,
        subtitle: `푸딩 웹사이트를 관리하기 위한 Admin Page 개발 및 유지보수를 담당했습니다. 기획안에 기능 외에는 따로 디자인을 준비하지 않아서 Angular Material을 이용하여 디자인을 하였습니다. 백엔드 개발자 한분과 같이 작업을 하였고, 완성 후 추가적인 개발 요청이 들어올 때마다 진행되었습니다.`,
        stack: ['Angular 7', 'Sass'],
        youtube: 'https://www.youtube.com/embed/jeXTYYE-4JU',
        mywork: [
          '프론트엔드 개발환경 셋팅, 그리고 데스크랍과 테블릿 반응형 작업등 전체 기능을 구현했습니다.',
          'Chart, 엑셀 변환 등 내부 팀원들의 요구사항에 맞는 기능들을 개발해서 제공했습니다.',
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
        stack: ['Angular 7', 'Sass'],
        mywork: [
          '외주로 부터 개발된 fooding.io 를 인계받아 개선하는 작업을 진행하였습니다.',
          '재사용을 위해 컴포넌트 분리와, 초기에 필요하지 않은 모듈 및 라이브러리들을 지연로딩하는 방법으로 개선하였습니다.',
          '새롭게 추가된 정기배송 신청 서비스를 위한 소개페이지 작업을 했습니다.',
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
    'Mobx의 개념과 원리를 이해하며, 적절한 상태관리를 하도록 노력합니다.',
  ],
  etc: [
    '단순히 요구사항을 받아서 구현하기만 하지 않고, 자유롭게 의견을 제시하고 좋은 방향으로 발전해 나가는 것을 좋아합니다.',
    '비 개발자분들과의 소통을 위해 최대한 쉽게 설명하거나, 예시를 통해 제안하고자 합니다.',
  ],
}

// export const Current: Skill[] = [
//   { name: 'HTML & CSS', url: '/assets/html.png', detail: details['html'] },
//   { name: 'Javascript', url: '/assets/js.png', detail: details['js'] },
//   { name: 'Typescript', url: '/assets/ts.png' },
//   {
//     name: 'Styled Component',
//     url: '/assets/styled.png',
//   },
//   { name: 'Sass', url: '/assets/sass.png' },
//   { name: 'React', url: '/assets/react.png', detail: details['react'] },
//   { name: 'Mobx', url: '/assets/mobx.jpeg' },
// ]

// export const Prev: Skill[] = [
//   { name: 'Ionic', url: '/assets/ionic.jpeg' },
//   { name: 'Redux', url: '/assets/Redux.png' },
//   { name: 'Rxjs', url: '/assets/rxjs.png' },
//   { name: 'Jest', url: '/assets/jest.png' },
//   { name: 'StoryBook', url: '/assets/storybook.png' },
//   { name: 'Figma', url: '/assets/figma.png' },
// ]

export const Extra = [
  {
    name: '패스트캠퍼스 프론트엔드 스쿨 과정',
    date: '2018-01 ~ 2018-04',
    status: '수료',
  },
  {
    name: '바리스타 및 카페 매니저 근무',
    date: '2012.03 ~ 2016.08',
    status: '바리스타 및 카페 매니저로 커피업계에서 5년 가까이 일을 했습니다.',
  },
  { name: '한남대학교', date: '2008.02 ~ 2011.09', status: '교육학과 중퇴' },
]
