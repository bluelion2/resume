import { IExpList } from '../interface/type'
import React from 'react'

export const ExpList: Array<IExpList> = [
  {
    name: '한국신용데이터',
    subtitle: '사장님의 모든 순간을 위한 서비스 "캐시노트"의 서비스를 개발하는 업무를 담당합니다.',
    date: '2023.04 ~ 재직중',
    icon: '/assets/kcd.png',
    stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind', 'React Query'],

    project: [
      {
        title: 'FE 협의체 참여',
        date: '2023.10 ~ 진행중',
        worker: 4,
        description: (
          <div>
            <span>
              "FE 관련 규칙 및 프로세스 리딩 & 공통 라이브러리 관리" 목적 하에, 4명으로 구성된
              가상의 운영조직을 신설했습니다. 그 중 일원으로 참여하여 FE 개발자들의 전체 생산성
              향상에 기여했습니다
            </span>
          </div>
        ),
        mywork: [
          'FE 개발자분들이 공통으로 쓰이는 디자인 시스템 & 앱과 통신을 위한 인터페이스와 같은 공통 라이브러리, 그 외 회사 홈페이지 등 불분명한 담당의 서비스들을 책임을 갖고 관리합니다',
          '사내 기술 표준과 공통 배포 프로세스 수립 & 신규 프로젝트 생성시 바로 사용할 수 있는 템플릿을 제공하여 생산성 향상에 기여했습니다.',
          '신규 입사자 공용 온보딩 가이드와, 기술 표준 등을 안내하기 위한 가이드 문서를 만들어 공유했습니다.',
        ],
      },
      {
        title: '광고 팀 - 금융중개 서비스',
        date: '2025.02 ~ 25.06',
        worker: 2,
        description: (
          <div>
            <span>
              사내 금융중개 서비스 중, 사장님들이 폐업시 보장받을수 있는 노란우산공제 가입 서비스
              개발 및, 신용카드 발급 중개 기능을 유지보수 했습니다.
            </span>
          </div>
        ),
        mywork: [
          '현대카드에서 사업자 전용 신용카드를 발급받기 전, 사장님의 개인정보를 바탕으로 얼만큼의 한도가 나오는지 조회하고 발급받도록 하는 한도조회 서비스를 개발했습니다',
          '홈텍스 스크래핑 모듈을 통한 국세청 인증정보를 바탕으로, 사용자에게 대출이 얼마나 가능한지 예상금액을 보여주는 기능을 개발했습니다.',
        ],
        // stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
      },

      {
        title: '마켓플레이스 팀 FE 개발',
        date: '2023.04 ~ 2024.10',
        worker: 6,
        // stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
        description: (
          <div>
            <span>
              사장님들이 대용량 물건을 싸게 구매할 수 있는 마켓(구매자) 서비스를 개발하였습니다.
              <br />
              초기에는 일매출 500만원 정도 되던 작은 서비스에서, 일매출 평균 8천만원까지 성장하도록
              구매자 서비스와 입점사 어드민 개발에 기여했습니다.
            </span>
          </div>
        ),
        mywork: [
          'RSC, Lazy Loading 들을 통해 LCP 개선에 기여했습니다. (3.Xs -> 1.4s)',
          '데이터독의 RUM, APM을 활용한 모니터링 환경과 E2E 테스트 구축으로 장애 탐지를 강화하여 서비스 안정성 향상시켰습니다.',
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
    stack: ['React', 'Typescript', 'Mobx', 'Vite'],

    project: [
      {
        title: '프론트엔드 파트리드 담당',
        date: '2020.07 ~ 2022.10',
        worker: 6,
        description: (
          <div>
            <span>
              회사 내 프론트엔드 개발자들 중, 가장 오래 재직하고 여러가지 개발한 경험이 있어 임시로
              파트리딩 역할을 담당하게 되었습니다.
              <br />
              주로 회사 내 서비스 개발 시 필요한 미팅에 참석하거나, 개발 생산성 향상 및 자잘한
              일손을 줄이는데 초점을 맞추었습니다.
            </span>
          </div>
        ),
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
        description: (
          <div>
            <span>
              회사에서 제작하는 수학문제, 교재, 학습지들을 관리하는 어드민을 만드는 프로젝트를
              진행했습니다.
              <br /> 오랜기간 담당자가 없이 방치된 탓에, 히스토리가 부족한 상황이어서 새롭게 만들게
              되었습니다. 다만 한번에 바꿀수는 없어 점진적으로 바꾸는 방법을 선택했습니다.
            </span>
          </div>
        ),
        mywork: [
          '새로운 프로젝트와 구 프로젝트간에 Iframe으로 연결하여, 새 프로젝트에서 기존 페이지는 그대로 쓸 수 있으면서 새로운 페이지를 개발해서 교체하는 식으로 작업했습니다.',
          '주관식, 객관식과 서술형같은 여러 상태를 다루고, 답안 중 수학기호 처리를 공통으로 사용하는 모듈을 개발하였습니다.',
        ],
      },
      {
        title: '매쓰플랫 리뉴얼 프로젝트 진행',
        date: '2020.07 ~ 2022.06',
        worker: 6,
        description: (
          <div>
            <span>
              기존 서비스의 불편함을 해소하기 위해 다시 시작한 프로젝트입니다. <br />
              처음에는 UI개선을 위해 시작했으나, 하다보니 규모가 커지면서 완전히 새로만드는
              프로젝트로 바뀌었습니다.
            </span>
          </div>
        ),
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
        description: (
          <div>
            <span>
              안드로이드 태블릿앱 '매쓰플랫'과 같은 기능을 웹에서 지원하기 위한 프로젝트를
              진행했습니다. <br />
              기존 1차 개발 중반에 참가를 하여 19년 10월에 일부 기능을 먼저 출시하고, 20년 3월에
              정식 출시 했습니다.
            </span>
          </div>
        ),
        // stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
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
    stack: ['Ionic4', 'Angular7', 'Sass'],
    project: [
      {
        title: 'Fooding 배송 App 개발',
        date: '2019.02 ~ 2019.03',
        worker: 2,
        description: (
          <div>
            3주 이내의 짧은기간내 개발해야 했기 때문에, 당시 Angular가 지원되는 Ionic을 이용해서
            하이브리드 앱으로 개발했습니다.
          </div>
        ),
        mywork: [
          '오늘의 배송 리스트 및 위치, 배송 상태등을 조회할 수 있는 배송기사용 앱을 개발 및 배포했습니다.',
          '안드로이드 테블릿과 모바일에 맞게 반응형으로 구현했습니다',
        ],
      },
      {
        title: 'Fooding 웹서비스 & Admin 개발 및 유지보수',
        date: '2018.10 ~ 2019.07',
        worker: 1,
        link: 'https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_',
        // youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
        // stack: ['Angular 6 ~ 7', 'Sass'],
        mywork: [
          '외주로 부터 Angular로 개발된 사이트를 인계받아 개선하는 작업을 진행했습니다',
          '어드민에 Chart, 엑셀 변환과 PDf 다운로드 등 내부 팀원들의 요구사항에 맞는 기능들을 개발해서 제공했습니다',
        ],
      },
    ],
  },
]

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
