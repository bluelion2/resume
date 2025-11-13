import { IExpList } from '../interface/type'
import React from 'react'

export const ExpList: Array<IExpList> = [
  {
    name: '한국신용데이터',
    subtitle:
      '사장님의 모든 순간을 위한 서비스 "캐시노트"의 서비스를 개발하는 업무를 담당합니다. 캐시노트 앱의 웹뷰를 통해 제공되는 여러가지 서비스들을 개발했습니다.',
    date: '2023.04 ~ 재직중',
    icon: '/assets/kcd.png',
    stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],

    project: [
      {
        title: 'FE 협의체 참여',
        date: '2023.10 ~ 진행중',
        worker: 4,
        description: (
          <div>
            <span>
              사내 FE 개발 환경의 표준화와 생산성 향상을 위해 FE 협의체라는 가상조직에 참여하여
              다양한 기술적 기여와 개선 활동, 여러 결정 사항 및 휘발된 내용들을 문서화 하는 작업을
              했습니다.
            </span>
          </div>
        ),
        mywork: [
          '사내 FE 표준 기술안 수립',
          'FE 공통 npm 패키지(디자인시스템, 앱 통신 인터페이스 등)의 개선작업 담당',
          '서비스 및 어드민 애플리케이션 저장소 템플릿 제공으로 FE 개발자들의 생산성 개선에 기여',
        ],
      },
      // {
      //   title: '광고 팀 - 금융중개 서비스',
      //   date: '2024.10 ~ 25.05',
      //   worker: 2,
      //   description: (
      //     <div>
      //       <span>
      //         사장님들이 폐업시 보장받을수 있는 노란우산공제 가입 서비스의 유지보수, 사업자 전용
      //         신용카드를 발급받기 전 사장님의 홈택스 정보를 바탕으로 얼만큼의 한도가 나오는지
      //         조회하고 발급받도록 하는 한도조회 서비스, 홈텍스 스크래핑 모듈을 통한 국세청
      //         인증정보를 바탕으로 사용자에게 대출이 얼마나 가능한지 예상금액을 보여주는 기능을
      //         백엔드 개발자 한명과 같이 개발했습니다.
      //       </span>
      //     </div>
      //   ),
      //   mywork: [
      //     '',
      //     // '현대카드에서 사업자 전용 신용카드를 발급받기 전, 사장님의 홈택스 정보를 바탕으로 얼만큼의 한도가 나오는지 조회하고 발급받도록 하는 한도조회 서비스를 개발',
      //     // '홈텍스 스크래핑 모듈을 통한 국세청 인증정보를 바탕으로, 사용자에게 대출이 얼마나 가능한지 예상금액을 보여주는 기능을 개발했습니다.',
      //   ],
      //   // stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
      // },

      {
        title: '마켓플레이스 팀 FE 개발',
        date: '2023.04 ~ ',
        // stack: ['NextJS', 'Typescript', 'Datadog', 'Tailwind css', 'React Query'],
        description: (
          <div>
            <span>
              사장님들이 대용량 물건을 싸게 구매할 수 있는 마켓(구매자) 서비스를 개발하였습니다.
              <br />
              초기에는 일 거래액 500만원 정도 되던 작은 서비스에서, 일 거래액 평균 1억원까지
              성장하도록 구매자 서비스를 개발하였습니다. <br /> 또한 매출 상승을 위해서 계약한
              입점사에서 주문 및 배송, 정산 관리를 편하게 할 수 있도록 필요한 어드민 기능들을 구현
              및 개선하였습니다.
              <br /> 초기에는 혼자서 프론트엔드 개발을 맡다가 거래액이 증가하면서 충원된 2명의 다른
              프론트엔드 팀원들과 같이 진행했습니다.
            </span>
          </div>
        ),
        mywork: [
          '신용카드 및 무통장 입금 결제, 네이버페이 결제 기능을 추가하였습니다. 이 과정에서 PG사가 변경됨에 따라 구조 개선하는 작업이 같이 진행되었습니다.',
          'BTF 영역의 레이지 로딩, Api Prefetch 등을 통해 LCP 개선에 기여. (3.Xs -> 1.4s)',
          '데이터독의 RUM, APM을 활용한 모니터링 환경과 E2E 테스트 구축으로 서비스 안정성 향상에 기여.',
          '프로모션 페이지 생성 기능을 제공하였습니다. 이 과정에서 반복 작업 해소를 위해 모듈화 시스템 작업을 제안하고 시스템 설계와 구현을 통해 생산성 향상에 기여',
        ],
      },
    ],
  },
  {
    name: '프리윌린',
    subtitle:
      '수학교육을 위한 B2B 모바일 솔루션 `매쓰플랫` 서비스의 웹 버전을 개발했습니다. 안드로이드 앱의 웹뷰 또는 웹으로 서비스를 제공하고 있습니다.',
    date: '2019.08 ~ 2023.03',
    icon: '/assets/mathflat.png',
    stack: ['React', 'Typescript', 'Mobx', 'Vite', 'Emotion'],

    project: [
      {
        title: '프론트엔드 파트리드 담당',
        date: '2020.07 ~ 2022.10',
        description: (
          <div>
            <span>
              회사 내 6명의 프론트엔드 개발자들 중, 가장 오래 재직하고 서비스에 대한 이해도가 높다는
              평가를 기준으로 파트리딩 역할을 담당하게 되었습니다. 주로 회사 내 개발일정 논의에
              참석하거나, 개발 생산성 향상 및 자잘한 리소스를 줄이는데 초점을 맞추었습니다.
            </span>
          </div>
        ),
        mywork: [
          '팀 내 생산성 향상을 위해 Jira API를 활용 또는 Jira Automation, Github Actions등을 이용한 자동화로 생산성 향상에 기여',
          'Github Action, Cypress를 사용하여 서비스 배포 때마다 E2E테스트를 자동으로 실행 및 결과를 Slack알림 추가',
          '서비스 정책과 기능 개발 히스토리 문서화가 부족하다 생각해서, 개발하면서 Notion에 틈틈히 정리하고 공유했습니다',
          '외주를 통해 만들어진 Electron 앱의 자잘한 버그를 고치며 유지보수 진행',
        ],
      },
      {
        title: '수학문제 CMS 개발',
        date: '2022.11 ~ 2023.03',
        worker: 1,
        description: (
          <div>
            <span>
              회사에서 제작하는 수학문제, 교재, 학습지들을 관리하는 어드민을 만드는 프로젝트를
              진행했습니다. 오랜기간 담당자가 없어 히스토리가 부족한 상황이어서 기존 서비스의 기능
              재구현 + 일부 개선하는 것을 중점으로 진행했습니다. <br /> 새로운 프로젝트와 구
              프로젝트간에 Iframe으로 연결하여, 양쪽의 인증처리와 새 프로젝트에서 기존 페이지는
              그대로 쓰면서 신규 페이지로 점진적 교체하는 작업을 했습니다.
            </span>
          </div>
        ),
        mywork: [
          '프론트엔드 기술환경 구성 및 기본 기능 구현',
          '주관식, 객관식과 서술형같은 여러 상태를 다루고, 답안 중 수학기호 처리를 공통으로 사용하는 모듈을 개발',
        ],
      },
      {
        title: '매쓰플랫 리뉴얼 프로젝트 진행',
        date: '2020.07 ~ 2023.03',

        description: (
          <div>
            <span>
              20년 3월 런칭 이후 개선하기 위해 다시 시작한 프로젝트입니다. <br />
              처음에는 UI개선만으로 시작했으나, 점차 규모가 커지면서 완전히 새로만드는 프로젝트로
              바뀌었습니다. 또한 기본적인 유지보수를 비롯해 비즈니스의 요구에 맞는 다양한 새로운
              기능을 개발했습니다. 5명의 개발자들과 같이 협업하면서 구조설계와 매니징 역할을 일부
              도맡았습니다.
            </span>
          </div>
        ),
        mywork: [
          '프로젝트의 구조 재설계와 개선하는 작업을 진행',
          '스토리북을 이용한 컴포넌트 기반 개발 도입',
          '안드로이드 앱 내부에 일부 페이지가 웹뷰로 들어감으로써 기능별 분기처리를 할 수 있는 공통함수와 인증하는 작업을 담당',
          'PWA 기능을 이용해서 일부 Ipad 사용자에게도 앱과 같은 사용성을 제공',
        ],
      },
      {
        title: '매쓰플랫 웹버전 개발',
        date: '2019.08 ~ 2020.06',
        worker: 4,
        description: (
          <div>
            <span>
              안드로이드 태블릿앱 '매쓰플랫'과 같은 기능을 웹에서 지원하기 위한 프로젝트를
              진행했습니다. <br />
              기존 1차 개발 중반에 참가를 하여 19년 10월에 일부 기능을 먼저 출시하고, 20년 3월에
              정식 출시 했습니다. 다른 프론트엔드 개발자와 협업하면서 제가 맡은 역할은 사용자가 수학
              컨텐츠를 직접 만드는 "학습지 만들기", "교재 만들기" 기능을 개발했습니다.
            </span>
          </div>
        ),
        // stack: ['React', 'Mobx', 'Redux', 'Sass', 'Styled Component', 'Typescript'],
        mywork: [
          '혼용중이던 Redux thunk와 Mobx 두 상태관리를, Mobx 하나로 통일하면서 구조 리팩토링 작업을 진행',
          'BE 와 FE 간에 서로 주고받는 데이터의 포맷에 규칙 제안 및 적용 → 포맷에 맞는 API 인터셉터를 만들어 에러로깅 및 범위를 쉽게 알 수 있도록 구현하였습니다.',
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
    stack: ['Ionic4', 'Angular6', 'Sass'],
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
        description: (
          <div>
            <span>
              단체음식을 주문 및 배송, 수거까지 하는 서비스를 개발하는 역할을 담당했습니다. 외주로
              부터 Angular로 개발된 사이트를 인계받아 개선하는 작업을 진행했으며, 내부 관리용으로
              필요한 어드민까지 같이 담당하였습니다.
            </span>
          </div>
        ),
        mywork: [
          '외주로 부터 Angular로 개발된 사이트를 인계받아 성능 개선하는 작업을 진행했습니다',
          '여러 프로모션 및 이메일 전용 페이지들을 퍼블리싱 했습니다.',
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
  // {
  //   name: '방송통신대학교 컴퓨터과학과',
  //   date: '2018-03 ~ ',
  //   status: '재학중',
  // },
  {
    name: '방송통신대 컴퓨터공학과',
    date: '26.03 ~ ',
    status: '준비중',
  },
  {
    name: '학점은행제 경영학과',
    date: '2016.07 ~ 2017.08',
    status: '졸업',
  },
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
