import { IExpList } from '../interface/type'
import React from 'react'

export const ExpList: Array<IExpList> = [
  {
    name: '한국신용데이터',
    subtitle:
      '사장님의 모든 순간을 위한 서비스 "캐시노트"의 서비스를 개발하는 업무를 담당합니다. 캐시노트 내의 다양한 서비스 중, 사장님들이 보다 싸게 물품을 구매할 수 있는 마켓 서비스를 담당하고 있습니다.',
    date: '2023.04 ~ 재직중',
    icon: '/assets/kcd.png',
    stack: ['Next.js', 'Vite', 'TypeScript', 'React Query', 'Tailwind CSS'],

    project: [
      {
        title: '마켓플레이스 팀',
        date: '2023.04 ~ 2024.10, 2025.06 ~ ',
        description: (
          <div>
            <span>
              사장님들이 대용량 물건을 싸게 구매할 수 있는 커머스 서비스와 입점사 및 내부직원용
              어드민을 개발하였습니다. 일매출 200만원 정도 되던 서비스에서, 일매출 평균 1억
              3천만원까지 성장하도록 기여했습니다.
              <br />
              캐시노트 앱 내에서 사장님들에게 물건을 판매 중개하는 커머스 서비스와, 입점사 및
              내부직원이 사용하는 어드민 양쪽을 개발하는 일을 담당합니다.
            </span>
          </div>
        ),
        mywork: [
          '커머스 서비스 고도화: 초기 카드결제만 되던 것을 포인트, 무통장 입금, 간편 결제 등 여러 결제 서비스 기능 구현',
          '홈에 여러 기능이 붙으며 느려진 초기 로딩 속도를 chunk size 축소, BTF 영역의 레이지 로딩, API Prefetch, 이미지 리사이징 등으로 개선 (LCP 3.4s → 최대 1.4s)',
          '셀러 및 어드민 백오피스 유지보수: 정산, 상품, 주문, 배송, CS 문의 기능 고도화',
          '엑셀 업&다운로드 기능 개발을 통한 업무 효율화, 거래명세서 및 발주, 정산 테이블 및 PDF 생성 기능 개발',
          '개발자 도움 없이 마케터가 어드민에서 프로모션 페이지(또는 페이지 내 영역)를 만들 수 있도록 모듈 시스템 구현',
        ],
      },
      {
        title: '광고 팀',
        date: '2024.10 ~ 2025.05',
        description: (
          <div>
            <span>
              체험단 서비스(현 캐시노트 플레이스) 어드민을 개선하는 작업을 진행했습니다. 이후
              노란우산, 대출 중개 및 사업자 신용카드 판매 서비스 업무가 추가되면서 같이 유지보수를
              담당했습니다.
            </span>
          </div>
        ),
        mywork: [
          '체험단 어드민 사이트 개발 및 유지보수',
          '금융중개 서비스 유지보수 및 개선: 대출 및 카드발급 신청 시 홈택스 스크래핑 정보를 앱에서 요청하고, 성공 여부에 따른 비동기 처리 flow 설계 및 구현',
          '현대카드에서 사업자 전용 신용카드를 발급받기 전, 사장님의 홈택스 정보를 수집해서 얼마만큼의 한도가 나오는지 조회하고 발급받도록 하는 서비스 개발',
        ],
      },
      {
        title: 'FE 협의체 활동',
        date: '2023.10 ~ 진행중',
        description: (
          <div>
            <span>
              사내 FE 개발 환경의 표준화와 생산성 향상을 위해 FE 협의체라는 가상 조직에 참여하여
              다양한 기술적 기여와 개선 활동, 여러 결정 사항 및 휘발된 내용들을 문서화하는 작업을
              했습니다.
            </span>
          </div>
        ),
        mywork: [
          'FE 전반적인 이슈 및 주요 논의사항에 대해 책임을 갖고 결정하는 역할 담당',
          '사내 Datadog 로그 수집을 관리하는 공통 라이브러리 생성 결정',
          '서비스 고도화 및 인력 충원에 따라 목적조직별로 레포를 관리하도록 모노레포 → 멀티레포 분리',
          'AI 활용으로 코드 생산속도가 빨라지며 피그마와 디자인시스템 코드의 괴리가 커짐에 따라, 디자인시스템 관리단위를 컴포넌트 → Foundation(font size, color 등)으로 축소',
          'FE 개발자들이 공통으로 쓰는 디자인 시스템, 이벤트 로그 수집, 웹뷰와 앱 사이 통신 인터페이스 등 공통 라이브러리와, 회사 홈페이지 등 담당이 불분명한 서비스들을 책임지고 관리',
        ],
      },
    ],
  },
  {
    name: '프리윌린',
    subtitle:
      '학원용 수학 학습 구독 서비스 "매쓰플랫"의 웹 버전을 개발했습니다. 학습지 만들기, 채점 및 보고서 생성 같은 핵심 기능과 출석·학원비·학생 관리 등 학원 운영 기능의 개발과 유지보수를 담당했습니다.',
    date: '2019.08 ~ 2023.03',
    icon: '/assets/mathflat.png',
    stack: ['React', 'TypeScript', 'Emotion', 'MobX'],

    project: [
      {
        title: '수학문제 CMS 개발',
        date: '2022.11 ~ 2023.03',
        description: (
          <div>
            <span>
              회사에서 사용하는 수학문제, 교재, 학습지들을 전부 관리하는 Content Management Service를
              새롭게 만드는 프로젝트입니다. 3년 전에 만들어진 이후로 유지보수가 잘 안 되는
              상황이었고, 신규 기능 추가 요청으로 인해 새롭게 만들어야 하는 상황이었습니다. 다만
              내부에서 많은 사람들이 쓰는 기능을 한 번에 바꿀 수 없어서 페이지별로 점진적으로
              개선하기로 하였습니다.
            </span>
          </div>
        ),
        mywork: [
          '인증 문제 대응: 많은 내부직원이 쓰는 서비스라 한 번에 바꿀 수 없어, 새 프로젝트와 구 프로젝트를 Iframe으로 연결하여 양쪽의 인증을 처리하고 기존 페이지는 그대로 쓰면서 신규 페이지로 점진적으로 교체',
          '수학기호 처리 모듈: 특정 라이브러리 의존도가 높아 마이너 버전 변경만으로도 에러가 발생하던 문제를, 주관식·객관식·서술형 등 여러 상태와 답안 중 수학기호를 공통으로 처리하는 모듈로 해결 → 모듈 수정만으로 전체 대응이 가능하고 라이브러리를 교체해도 UI 로직에 영향이 없도록 구조 수립',
        ],
      },
      {
        title: '매쓰플랫 서비스 개발',
        date: '2019.08 ~ 2023.03',
        description: (
          <div>
            <span>
              안드로이드 태블릿 앱 '매쓰플랫'과 같은 기능을 웹에서 지원하기 위한 프로젝트를
              진행했습니다. 기존 1차 개발 중반에 참가를 하여 19년 10월에 일부 기능을 먼저 출시하고,
              20년 3월에 정식 출시했습니다. 이후 지속적인 서비스 개발 및 유지보수 업무를
              담당했습니다.
            </span>
          </div>
        ),
        mywork: [
          '서비스 런칭 이후 서비스 확장을 위한 리뉴얼 작업에서 아키텍처를 고민하고 팀원들과 공유하여 개발 생산성 향상에 기여',
          'MobX와 Redux 둘로 나뉘어 복잡도가 높던 상태관리를 팀 논의 후 MobX로 일원화 → Redux를 걷어내고 util 함수, 스토어 생성자와 가이드를 제공하여 복잡도 감소 및 확장성 개선',
          'QA 여력 부족으로 배포 후 CS가 많이 인입되던 문제를, GitHub Actions + Cypress E2E 테스트를 도입해 3주 단위 배포 시 및 원할 때마다 실행할 수 있도록 개선',
          '매쓰플랫의 핵심기능인 학습지 만들기와 교재 만들기 기능 전체를 담당',
          'iOS 앱을 만들 수 없는 상황에서 iOS 사용 요구가 많아져, PWA 지원을 가볍게 적용하고 사용 가이드를 제공',
        ],
      },
      {
        title: '프론트엔드 파트 리드 담당',
        date: '2020.07 ~ 2022.10',
        description: (
          <div>
            <span>
              회사 내 6명의 FE 동료들 중, 가장 오래 재직하고 여러 가지 개발한 경험이 있어 임시로
              파트리딩 역할을 담당하게 되었습니다. 주로 회사 내 서비스 개발 시 필요한 미팅에
              참석하거나, 개발 생산성 향상 및 자잘한 일손을 줄이는 데 초점을 맞추었습니다. 또한 개발
              히스토리 문서화가 부족하다 생각해서, 개발하면서 틈틈이 정리했습니다.
            </span>
          </div>
        ),
        mywork: [
          '팀 내 업무 향상을 위해 자동화에 도움을 주는 Jira Automation, GitHub Actions를 만들어서 배포',
          'Developer Talk라는 사내 지식 공유 자리를 만들어 관리하고, MobX Deep Dive, 2021년 회고 등 여러 발표 진행',
        ],
      },
    ],
  },
  {
    name: '(주) 열두달',
    subtitle:
      '단체음식을 배송하는 Fooding의 프론트엔드 개발자로 근무를 하면서 쇼핑사이트 유지보수와 내부적으로 필요한 Admin Page, 배송기사용 앱을 개발하였습니다.',
    date: '2018.10 ~ 2019.07',
    icon: '/assets/fooding.png',
    stack: ['Angular 6', 'Ionic 4', 'TypeScript'],
    project: [
      {
        title: '배송기사용 하이브리드 앱 개발',
        date: '2019.02 ~ 2019.03',
        description: (
          <div>
            배송 서비스를 진행하기 위해 내부 배송기사용 앱의 개발이 필요했습니다. 빠른 시간 내에
            개발해서 사용해야 했기 때문에, 사내 기술스택과 제일 맞는 Ionic 4를 이용해서 반응형으로
            개발 & 안드로이드 앱 배포를 하였습니다.
          </div>
        ),
        mywork: ['Ionic 4를 이용해 배송기사용 앱을 반응형으로 개발하고 안드로이드 앱으로 배포'],
      },
      {
        title: 'Fooding 웹서비스 개발 및 유지보수',
        date: '2018.10 ~ 2019.07',
        link: 'https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_',
        // youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
        description: (
          <div>
            <span>
              외주로 개발된 fooding.io를 인계받아 개선하는 작업을 진행하였습니다. 요청에 따라
              사이트 내 정기배송 소개페이지 등 추가 개발도 진행하였습니다. 이와 관련해서 개선하기
              위한 경험을 간단히 발표해 보았습니다.
            </span>
          </div>
        ),
        mywork: [
          '재사용을 위해 컴포넌트를 분리하고, 초기에 필요하지 않은 모듈 및 라이브러리들을 지연로딩하여 초기 로딩 개선',
          '내부 직원 대상 어드민 개발',
        ],
      },
    ],
  },
]

export const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'React Query',
  'MobX',
  'Emotion',
  'Tailwind CSS',
  'Cypress',
  'Datadog',
  'GitHub Actions',
  'HTML',
  'CSS',
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
    name: '방송통신대 컴퓨터과학과',
    date: '2026.03 ~ ',
    status: '재학중',
  },
  {
    name: '정보처리기사',
    date: '2019.11.22',
    status: '취득',
  },
  {
    name: '바리스타 및 카페 매니저 근무',
    date: '2012.03 ~ 2016.08',
    status: '커피업계에서 5년가량 바리스타 및 매니저로 근무하였습니다',
  },
  { name: '한남대학교', date: '2008.02 ~ 2011.09', status: '교육학과 중퇴' },
]
