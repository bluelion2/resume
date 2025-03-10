import { IExpList } from '../interface/type'
import React from 'react'

export const ExpList: Array<IExpList> = [
  {
    name: '한국신용데이터',
    subtitle: '사장님의 모든 순간을 위한 서비스 "캐시노트"의 서비스를 개발하는 업무를 담당합니다.',
    date: '2023.04 ~ 재직중',
    icon: '/assets/kcd.png',
    part: (
      <div>
        <strong>FE 협의체</strong>
        <p>
          "FE 관련 규칙 및 프로세스 리딩 & 공통 라이브러리 관리" 목적 하에, 4명으로 구성된 가상의
          운영조직을 신설했습니다 그 중 일원으로 참여하여 FE 개발자들의 전체 생산성 향상에
          기여했습니다
        </p>
      </div>
    ),
    project: [
      {
        title: 'FE 협의체 참여',
        date: '2023.10 ~ 진행중',
        worker: 4,
        mywork: [
          'FE 개발자분들이 공통으로 쓰이는 디자인 시스템 & 앱과 통신을 위한 인터페이스와 같은 공통 라이브러리, 그 외 회사 홈페이지 등 불분명한 담당의 서비스들을 책임을 갖고 관리합니다',
          '신규 프로젝트 생성시 바로 사용할 수 있는 템플릿을 제공하여 생산성 향상에 기여했습니다',
          '신규 입사자 온보딩 가이드와, 기술 표준 등을 안내하기 위한 가이드 문서를 만들어 공유했습니다',
        ],
      },
      {
        title: '광고 팀 - 우리가게 체험단',
        date: '2024.10 ~ 2025.01',
        worker: 2,
        // subtitle: ``,
        // stack: ['NextJS', 'React Query', 'Typescript', 'TailwindCSS'],
        mywork: [
          '사장님과 리뷰어를 중개해주는 "우리가게 체험단" 서비스의 유지보수 및 어드민을 만들었습니다',
          '모듈 페더레이션을 활용하여 공통 어드민에 도메인을 통합하고, 인증을 간단히 할 수 있도록 했습니다',
        ],
        stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
      },
      {
        title: '광고 팀 - 금융중개 관리',
        date: '2025.02 ~ 진행중',
        worker: 2,
        // subtitle: ``,
        // stack: ['NextJS', 'React Query', 'Typescript', 'TailwindCSS'],
        mywork: ['노란우산공제, 외부 금융사의 대출중개 서비스의 유지보수를 합니다'],
        stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
      },
      // {
      //   title: '광고 팀 - 혜택 서비스 관리',
      //   date: '2025.03 ~ 진행중',
      //   worker: 2,
      //   // subtitle: ``,
      //   mywork: [
      //     '외부 광고사 들로부터 받은 광고 목록을 관리하는 어드민과, 유저에게 보여지는 서비스를 새롭게 만들고 있습니다',
      //   ],
      //   stack: ['NextJS', 'Typescript', 'Tailwind css', 'React Query'],
      // },
      {
        title: '마켓플레이스 팀 FE 개발',
        date: '2023.04 ~ 2024.10',
        worker: 6,
        stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
        // description: (
        //   <div>
        //     <p>
        //       - 입사 당시 월 거래액 1억 미만의 서비스로 시작하였지만, 좋은 동료들과 함께 6개월만에
        //       10배 넘는 서비스로 발전할 수 있었습니다. 늘 고객중심으로 생각하며, 1년 내에 100배가
        //       넘는 서비스로 발전하고자 노력하고 있습니다.
        //     </p>
        //     <p>
        //       - 전사적으로 이용자 개개인의 맞춤 컨텐츠를 보여주는 "개인화 프로젝트"를 진행하면서
        //       서비스 내에서 많은것들을 실험해보고 도전하고 있습니다.
        //     </p>
        //     <p>
        //       - 또한 입점사에서 편리하게 상품 등록 및 재고, 배송 관리를 할 수 있는 어드민을 개발 및
        //       개선작업을 하고 있습니다.
        //     </p>
        //   </div>
        // ),
        mywork: [
          '일매출 500만원 서비스를, 1년 내에 일매출 8,000만원까지 성장하도록 기여했습니다',
          '캐시노트 앱에서 보여지는 마켓 서비스와, 입점사 대상 어드민 서비스 양쪽을 개발했습니다',
          '신용카드 및 무통장 입금 결제, 네이버페이 결제 기능을 개발했습니다',
          'RSC, Lazy Loading 들을 통해 LCP 개선에 기여했습니다 (3.3s -> 1.5s)',
          '데이터독 RUM의 E2E 테스트 구축으로 장애 탐지를 강화하여 서비스 안정성을 높이는데 기여했습니다',
        ],
      },
    ],
  },
  {
    name: '프리윌린',
    subtitle:
      '수학교육을 위한 B2B 모바일 솔루션 `매쓰플랫` 서비스의 웹 버전을 개발했습니다 또한 파트 리드를 맡아 프론트엔드 파트에서 전체 일정 및 진행사항을 관리하는 역할을 했습니다',
    date: '2019.08 ~ 2023.03',
    icon: '/assets/mathflat.png',
    part: (
      <div>
        <strong>파트 리드</strong>
        <p>
          회사 내에 FE 개발자가 처음 2명에서 6명 이상 늘어나게 되면서, 일정 관리를 담당하고 팀 내
          생산성을 높이는 기능을 개발 했습니다
        </p>
      </div>
    ),
    project: [
      {
        title: '프론트엔드 파트리드 담당',
        date: '2020.07 ~ 2022.10',
        worker: 6,
        mywork: [
          '팀 내 생산성 향상을 위해 Jira API를 활용 또는 Jira Automation, Github Actions등을 구성하여 자동화 작업을 진행했습니다',
          'Github Action, Cypress를 사용하여 서비스 배포 때마다 E2E테스트를 자동으로 실행, 결과를 Slack으로 받을 수 있게 했습니다',
          '서비스 정책과 기능 개발 히스토리 문서화가 부족하다 생각해서, 개발하면서 Notion에 틈틈히 정리하고 공유했습니다',
          '외주를 통해 만들어진 Electron 앱의 자잘한 버그를 고치며 유지보수 하였습니다.',
        ],
      },
      {
        title: 'CMS(Content Managing Service) 개발',
        date: '2022.11 ~ 2023.03',
        worker: 1,
        subtitle: '수학문제, 교재, 학습지 및 내부 컨텐츠를 관리하는 CMS를 개선하는 프로젝트입니다',
        // stack: ['React Query', 'React', 'Typescript', 'TailwindCSS', 'Vite', 'React Hook Form'],
        mywork: [
          '과목, 교육과정 등 다양한 구조의 문제 컨텐츠를 생성, 수정, 편집할 수 있는 어드민을 개발했습니다',
          '주관식, 객관식과 서술형같은 여러 상태를 다루고, 답안 중 수학기호 처리를 공통으로 사용하는 모듈을 개발하였습니다.',
        ],
      },
      // {
      //   title: '학생 출석 서비스 리뉴얼',
      //   date: '2020.11',
      //   worker: 1,
      //   subtitle: `학원에 학생들이 출석을 하면, 출석 기록을 남기고 학부모에게 문자를 전달하는 웹서비스를 개발했습니다`,
      //   stack: ['React', 'Typescript', 'Mobx'],
      //   mywork: [
      //     '기존에 있던 네이티브 앱을 웹으로 대체하는 프로젝트로써 혼자서 반응형으로 개발했습니다',
      //     'CRA대신 Webpack5로 직접 환경구축을 하여 빌드속도를 개선했습니다',
      //   ],
      // },

      {
        title: '매쓰플랫 리뉴얼 프로젝트 진행',
        date: '2020.07 ~ 2022.06',
        worker: 6,
        subtitle: `기존 서비스의 불편함을 해소하기 위해 다시 시작한 프로젝트입니다 처음에는 UI개선을 위해 시작했으나, 점차 규모가 커지면서 완전히 갈아엎는 프로젝트로 바뀌었습니다`,
        stack: ['React', 'Mobx', 'EmotionJS', 'Storybook', 'Typescript'],
        mywork: [
          'Storybook을 이용해 컴포넌트를 개발, 배포하여 디자이너가 쉽게 작업물을 확인하는 환경을 제공했습니다',
          '안드로이드 앱 내부에 일부 페이지가 웹뷰로 들어감으로써 기능별 분기처리를 할 수 있는 공통함수와 인증하는 작업을 담당했습니다',
          'PWA를 이용해서 일부 Ipad 사용자에게도 앱과 같은 사용성을 제공했습니다',
        ],
      },
      {
        title: '웹 매쓰플랫 개발 및 유지보수',
        date: '2019.08 ~ 2020.06',
        worker: 4,
        subtitle: `안드로이드 태블릿앱 '매쓰플랫'과 같은 기능을 웹에서 지원하기 위한 팀프로젝트를 진행하고 있습니다 기존 1차 개발 중반에 참가를 하여 19년 10월에 1차 출시 20년 3월에 그랜드오픈을 했습니다
        신규 프로젝트를 진행하면서 몇몇 기능을 추가 또는 유지보수를 하고 있습니다`,
        stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
        mywork: [
          '기존 프로젝트가 상태관리 라이브러리인 Redux thunk와 Mobx를 두개 쓰고 있었는데, Mobx 하나로 통일하는 작업을 맡았습니다',
          'Javascript에서 Typescript로 마이그레이션 했습니다',
          '사용자가 수학 컨텐츠를 직접 만드는 "학습지 만들기", "교재 만들기" 기능을 개발했습니다',
        ],
      },
    ],
  },
  {
    name: '(주) 열두달',
    subtitle:
      '단체음식을 배송 하는 Fooding의 프론트엔드 개발자로 근무를 하면서 쇼핑사이트 유지보수와 내부적으로 필요한 Admin Page, 배송기사용 앱을 개발했습니다',
    date: '2018.10 ~ 2019.07',
    icon: '/assets/fooding.png',
    project: [
      {
        title: 'Fooding 배송 App 개발',
        date: '2019.02 ~ 2019.03',
        worker: 2,
        subtitle: '배송 서비스를 진행하기 위해 내부 배송기사용 앱을 개발 및 배포했습니다.',
        // youtube: 'https://www.youtube.com/embed/_tYefWU1kzY',
        stack: ['Ionic4', 'Sass'],
        mywork: [
          '3주 이내에 개발해서 사용해야 했기 때문에, 당시 Angular가 지원되는 Ionic을 이용해서 하이브리드 앱으로 개발했습니다',
          '안드로이드 테블릿과 모바일에 맞게 반응형으로 구현했습니다',
        ],
      },
      {
        title: 'Fooding 웹서비스 & Admin 개발 및 유지보수',
        date: '2018.10 ~ 2019.07',
        worker: 1,
        subtitle: '외주로 부터 개발된 사이트를 인계받아 개선하는 작업을 진행했습니다',
        link: 'https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_',
        // youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
        stack: ['Angular 6 ~ 7', 'Sass'],
        mywork: [
          '외주로 부터 Angular로 개발된 사이트를 인계받아 개선하는 작업을 진행했습니다',
          '어드민에 Chart, 엑셀 변환과 PDf 다운로드 등 내부 팀원들의 요구사항에 맞는 기능들을 개발해서 제공했습니다',
        ],
      },
    ],
  },
]

// export const details = {
//   html: [
//     '시멘틱 마크업을 준수하기 위해 노력합니다',
//     '크로스 브라우징 및 반응형을 구현 할 수 있습니다',
//     'Sass, css-in-js (styled-component) 등의 방법을 활용할 수 있습니다',
//   ],
//   js: [
//     'ES5, ES6 문법에 익숙하고, 최신 문법에 관심을 가지고 있습니다',
//     '타입스크립트를 주로 사용하려고 합니다',
//   ],
//   react: [
//     '적당한 컴포넌트 분리와 재사용성에 대해 고민합니다',
//     '불필요한 렌더링을 최소화 하기위해 노력합니다',
//   ],
//   etc: [
//     '단순히 요구사항을 받아서 구현하기만 하지 않고, 자유롭게 의견을 제시하고 좋은 방향으로 발전해 나가는 것을 좋아합니다',
//     '비 개발자분들과의 소통을 위해 최대한 쉽게 설명하거나, 예시를 통해 제안하고자 합니다',
//   ],
// }

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
    status: '바리스타 및 카페 매니저로 커피업계에서 5년 가까이 일을 했습니다',
  },
  { name: '한남대학교', date: '2008.02 ~ 2011.09', status: '교육학과 중퇴' },
]
