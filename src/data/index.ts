import { IExpList } from '../interface/type'

export const ExpList: Array<IExpList> = [
  {
    name: '한국신용데이터',
    subtitle: '',
    date: '2023.04 ~ 재직중',
    icon: '/assets/kcd.png',
    project: [
      {
        title: '마켓플레이스 팀 FE 개발',
        date: '2023.04 ~ 진행중',
        worker: 5,
        subtitle: `사장님들이 원하는 좋은 물건을 싸게 살수 있는 마켓 서비스를 개발하고 있습니다. 입사 당시 월 거래액 1억 미만의 서비스로 시작하였지만, 좋은 동료들과 함께 6개월만에 10배 넘는 서비스로 발전할 수 있었습니다.     
        늘 고객중심으로 생각하며, 1년 내에 100배가 넘는 서비스로 발전하고자 노력하고 있습니다.`,
        stack: ['NextJS', 'React Query', 'Typescript', 'TailwindCSS'],
        mywork: [
          '캐시노트 앱에서 보여지는 마켓 서비스와, 입점사 대상 어드민 서비스를 개발하고 있습니다.',
          '다양한 형태의 고객들에게 알맞는 상품 및 이벤트를 노출시키도록 "서비스 개인화"에 기여하고 있습니다.',
          '팀 내 여러가지 서비스 테스트를 진행하기 쉽도록 Hackle, Clarity 등 다양한 기술들을 도입해보고 실험합니다.',
          '이전에 산 상품을 쉽게 살수 있는 "간편주문" 기능을 개발하였습니다.',
          '고객 요청사항이 많은 신용카드 및 무통장 입금 결제 기능을 개발하였습니다.',
          '입점사에서 하나의 단일 상품에서 여러가지 옵션을 추가해서 판매할수 있는 기능을 개발하였습니다.',
        ],
      },
    ],
  },
  {
    name: '프리윌린',
    subtitle:
      '수학교육을 위한 B2B 모바일 솔루션 `매쓰플랫` 서비스의 웹 버전을 개발하고 있습니다. 파트 리드를 맡아 프론트엔드 파트에서 전체 일정 및 진행사항을 관리하고 다른파트와 조율하는 역할을 담당했습니다.',
    date: '2019.08 ~ 2023.03',
    icon: '/assets/mathflat.png',
    project: [
      {
        title: 'CMS(Content Managing Service) 개발',
        date: '2022.11 ~ 2023.03',
        worker: 1,
        subtitle: '수학문제, 교재, 학습지 및 내부 컨텐츠를 관리하는 CMS를 개선하는 프로젝트입니다.',
        stack: ['React Query', 'React', 'Typescript', 'TailwindCSS', 'Vite', 'React Hook Form'],
        mywork: [
          '점진적 개선을 위해 두개의 어플리케이션을 iframe으로 연동해서 새로운 기능 개발 후 교체하는 방식으로 진행했습니다',
          '과목, 교육과정 등 다양한 구조의 문제 컨텐츠를 편집할 수 있는 Form을 개발하였습니다.',
        ],
      },
      {
        title: '매쓰플랫 프로젝트 고도화',
        date: '2022.07 ~ 2023.03',
        worker: 6,
        subtitle:
          '비즈니스 성장을 위해 사용자들이 원하는 기능들 일부를 개선하거나 팀 내 생산성을 높이는 작업들을 하였습니다.',
        stack: ['Github Action', 'Vite', 'Jira', 'Cypress', 'ETC..'],
        mywork: [
          '팀 내 생산성 향상을 위해 Jira API를 활용하거나 Jira Automation, Github Actions등을 직접 구성하여 자동화 작업을 진행했습니다.',
          'Github Action, Cypress를 사용하여 서비스 배포 때마다 E2E테스트를 자동으로 실행, 결과를 Slack으로 받을 수 있게 하였습니다.',
        ],
      },
      {
        title: '학생 출석 서비스',
        date: '2020.11',
        worker: 1,
        subtitle: `학원에 학생들이 출석을 하면, 출석 기록을 남기고 학부모에게 문자를 전달하는 웹서비스를 개발했습니다.`,
        stack: ['React', 'Typescript', 'Mobx', 'Scss', 'Webpack'],
        mywork: [
          '기존에 있던 네이티브앱을 대체하는 프로젝트로써 디자인이나 기획이 따로 없이 혼자서 반응형으로 개발했습니다.',
          'CRA대신 Webpack5로 직접 환경구축을 하여 빌드속도를 개선하였습니다.',
          'Github Action, Cypress를 사용하여 서비스 배포 때마다 E2E테스트를 자동으로 실행, 결과를 Slack으로 받을 수 있게 하였습니다.',
        ],
      },
      {
        title: '매쓰플랫 신규 프로젝트 개발',
        date: '2020.07 ~ 2022.06',
        worker: 6,
        subtitle: `기존 서비스의 불편함을 해소하기 위해 다시 시작한 프로젝트입니다. 처음에는 UI개선을 위해 시작했으나, 점차 규모가 커지면서 새롭게 만드는 프로젝트로 바뀌었습니다. 새로운 서비스를 개발하면서 기존 서비스를 같이 유지해나갔습니다.`,
        stack: ['React', 'Mobx', 'EmotionJS', 'Storybook', 'Typescript'],
        mywork: [
          '프론트엔드 파트에서 파트 리드를 맡아 MD 기준으로 일감 분배, 전체 일정 및 진행사항을 관리하고 다른파트와 조율하는 역할을 담당했습니다.',
          'Storybook을 이용해 컴포넌트를 개발, 배포하여 디자이너가 쉽게 작업물을 확인하는 환경을 제공했습니다.',
          '안드로이드 앱 내부에 일부 페이지가 웹뷰로 들어감으로써 기능별 분기처리를 할 수 있는 공통함수와 인증하는 작업을 담당했습니다.',
          '수학 컨텐츠를 만드는 "학습지 만들기", "교재 만들기" 기능을 리팩토링했습니다.',
          '학생들의 수업진도를 파악, 틀린 문제를 기반으로 취약점을 보강하는 기능을 개발했습니다.',
        ],
      },
      {
        title: '웹 매쓰플랫 개발 및 유지보수',
        date: '2019.08 ~ 2020.06',
        worker: 4,
        subtitle: `안드로이드 태블릿앱 '매쓰플랫'과 같은 기능을 웹에서 지원하기 위한 팀프로젝트를 진행하고 있습니다. 기존 1차 개발 중반에 참가를 하여 19년 10월에 1차 출시 20년 3월에 그랜드오픈을 하였습니다.
        신규 프로젝트를 진행하면서 몇몇 기능을 추가 또는 유지보수를 하고 있습니다.`,
        stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
        mywork: [
          '기존 프로젝트가 상태관리 라이브러리인 Redux thunk와 Mobx를 두개 쓰고 있었는데, Mobx 하나로 통일하는 작업을 맡았습니다.',
          '타입스크립트를 새로 도입해서 리팩토링을 진행했습니다.',
          '수학 컨텐츠를 만드는 "학습지 만들기", "교재 만들기" 기능을 개발했습니다.',
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
          '배송 서비스를 진행하기 위해 내부 배송기사용 앱을 개발 및 배포하였습니다. 현재는 앱이 내려가있는 상태입니다. ',
        // link: 'https://play.google.com/store/apps/details?id=app.fooding.delivery',
        youtube: 'https://www.youtube.com/embed/_tYefWU1kzY',
        stack: ['Ionic 4(Angular)', 'Sass'],
        mywork: [
          '3주 이내에 개발해서 사용해야 했기 때문에, 사내 기술스택과 제일 맞는 Ionic4를 이용해서 전체 개발하였습니다.',
          '안드로이드 테블릿과 모바일에 맞게 반응형으로 구현하였습니다.',
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
          'Chart, 엑셀 변환과 PDf 다운로드 등 내부 팀원들의 요구사항에 맞는 기능들을 개발해서 제공했습니다.',
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
        stack: ['Angular', 'Sass'],
        mywork: [
          '외주로 부터 개발된 fooding.io 를 인계받아 개선하는 작업을 진행하였습니다.',
          '재사용을 위해 하나로 뭉쳐있던 컴포넌트를 분리하고, 초기에 필요하지 않은 모듈 및 라이브러리들을 지연로딩하는 방법으로 개선하였습니다.',
          '새롭게 추가된 정기배송 신청 서비스를 위한 소개페이지 퍼블리싱 작업을 했습니다.',
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

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux',
  'MobX',
  'Styled Components',
  'Storybook',
  'Jest',
  'Cypress',
]

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
