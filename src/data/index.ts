import { Skill } from "../interface/type";
import { IExpList } from "../interface/type";

export const ExpList: Array<IExpList> = [
  {
    name: "프리윌린",
    subtitle:
      "수학교육을 위한 B2B 모바일 솔루션 매쓰플랫의 웹 버전을 개발하고 있습니다.",
    date: "2019.08 ~ 재직중",
    icon: "/assets/mathflat.png",
    project: [
      {
        title: "웹 매쓰플랫 개발 및 유지보수",
        date: "2019.08 ~ 진행중",
        worker: 4,
        subtitle: `안드로이드 태블릿앱 '매쓰플렛'과 같은 기능을 웹에서 지원하기 위한 팀프로젝트를 진행하고 있습니다. 기존 1차 개발 중반에 참가를 하여 현재까지 진행중이며, 핵심 기능을 도맡아 개발하고, 먼저 개발된 기능의 코드 리팩토링을 하고 있습니다.`,
        stack: [
          "React",
          "Mobx",
          "Redux",
          "Sass",
          "Styled Component",
          "Typescript"
        ],
        mywork: [
          "기존 Class Component - Redux thunk에서 Hooks를 도입해 Mobx와 연계해서 사용하고 있습니다.",
          "IE11부터 모던 브라우저 까지의 서비스 지원하고 있습니다.",
          " 기존 자바스크립트로 되있던 프로젝트를 타입스크립트로 바꾸면서 타입 정의 및 구조 수정을 하고 있습니다.",
          "서비스 정책과 기능 개발 히스토리 문서화가 부족하다 생각해서, 개발하면서 계속 업데이트 하고 있습니다."
        ],
        memory: [
          "진행중인 프로젝트에서, 레거시 코드의 개선과 기능 개발의 두마리 토끼를 잡는다는 것이 어렵다는 것을 느꼈습니다.",
          "IE와, 성능이 낮은 컴퓨터(window7같은..)를 사용하는 고객이 많아 최적화를 염두해야 한다는 점을 생각하는 프로젝트였습니다."
        ]
      }
    ]
  },
  {
    name: "(주) 열두달",
    subtitle:
      "단체음식을 배송 하는 Fooding의 프론트엔드 개발자로 근무를 하면서 쇼핑사이트 유지보수와 내부적으로 필요한 Admin Page, 배송기사용 앱을 개발하였습니다.",
    date: "2018.10 ~ 2019.07",
    icon: "/assets/fooding.png",
    project: [
      {
        title: "Fooding Menu App 개발",
        date: "2019.05 ~ 2019.07",
        worker: 1,
        subtitle:
          "정기배송 서비스를 이용하는 고객들을 대상으로 메뉴를 안내하는 앱 개발을 진행하였습니다. Ionic 보다 좋은 성능과, IOS, 안드로이드를 한번에 개발할 수 있는  React Native를 이용해 개발을 진행하였습니다. 내부 사정으로 인해 프로젝트가 중단되었습니다.",
        stack: ["React native", "Typescript", "Mobx"],
        mywork: ["Mobx를 이용한 상태관리", "퍼블리싱 작업"],
        memory: [
          "React를 조금 공부하고 시작했는데, Router 관리와 Native 쪽 문제 빼고는 크게 어렵지는 않았습니다. 중간에 프로젝트가 중단 된게 아쉬울 뿐입니다.",
          "이 때부터 리액트에 대해 관심을 갖고 공부를 하기 시작했습니다. 둘 다 해보면서, 프론트엔드 프레임워크도 중요하지만 근본인 자바스크립트에 대해 공부의 필요성을 느끼게 되었습니다."
        ]
      },
      {
        title: "Fooding Delivery App 개발",
        date: "2019.02 ~ 2019.03",
        worker: 2,
        subtitle:
          "배송 서비스를 진행하기 위해 내부 배송기사용 앱의 개발이 필요했습니다. 빠른 시간 내에 개발해서 사용해야 했기 때문에, 사내 기술스택과 제일 맞는 Ionic4를 이용해서 개발을 하였습니다.  안드로이드 버전만 배포하였습니다.",
        link:
          "https://play.google.com/store/apps/details?id=app.fooding.delivery",
        youtube: "https://www.youtube.com/embed/_tYefWU1kzY",
        stack: ["Ionic4", "Sass"],
        mywork: [
          "프론트엔드 개발환경 셋팅 및 전체 기능 구현",
          "최초 진입시 로그인, 그 후 자동로그인이 되도록 구현했습니다.",
          "주문의 상태에 따른 스텝 표시, 스텝 이동 기능을 구현하였습니다.",
          "하단 및 좌측 네비게이션 기능을 개발해서 필요한 페이지로 바로 이동할 수 있게 구현했습니다.",
          "안드로이드 태블릿 및 모바일에 맞게 개발"
        ],
        memory: [
          "Angular와 Ionic을 해본 경험, 오래된 기술이다 보니 자료들을 찾는데 수월해서 쉽게 개발할 수 있었습니다. 성능이 많이 떨어질까봐 걱정했는데, 우려한 만큼의 나쁜성능은 아니였습니다."
        ]
      },
      {
        title: "Fooding 개발 및 유지보수",
        date: "2018.10 ~ 2019.07",
        worker: 1,
        subtitle:
          "외주로 부터 개발된 fooding.io 를 인계받아 개선하는 작업을 진행하였습니다. 요청에 따라 사이트 내 정기배송 소개페이지 등 추가 개발도 진행하였습니다. 이와 관련해서 개선하기 위한 경험을 간단히 발표해 해보았습니다.",
        link:
          "https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_",
        youtube: "https://www.youtube.com/embed/jQ1YNnLlUKs",
        stack: ["Angular7", "Sass"],
        mywork: [
          "기존의 외주 코드들을 전부 리팩토링했습니다.  document.getElementsByClassName로 특정 class를 컨트롤 하거나, 기존에 컴포넌트에서 모든것을 처리하던 Angular 공식문서에서 제안하는 컴포넌트, 서비스 분리하는 방법으로 바꾸었습니다.",
          "새롭게 추가된 정기배송 신청 서비스를 위한 페이지를 퍼블리싱 했습니다.",
          "초기 로딩속도가 느린점을 극복하기 위해 초기에 필요하지 않은 모듈 및 컴포넌트, 라이브러리들을 지연로딩하는 방법으로 개선하였습니다."
        ],
        memory: [
          "'내가 짠 코드도 일주일 뒤에 까먹는데, 남이 짠 코드는 오죽하랴'는 말이 떠올랐습니다. 중복되는 코드를 정리하고 레거시 코드를 하나씩 뜯어보면서 고통과, 개선해 나가는 보람을 느꼈습니다."
        ]
      },
      {
        title: "Admin Page 제작",
        date: "2018.10 ~ 2018.12",
        worker: 1,
        subtitle: `푸딩 웹사이트를 관리하기 위한 Admin Page 개발 및 유지보수를 담당했습니다. 기획안에 기능 외에는 따로 디자인을 준비하지 않아서 Angular Material을 이용하여 디자인을 하였습니다. 백엔드 개발자 한분과 같이 작업을 하였고, 완성 후 추가적인 개발 요청이 들어올 때마다 진행되었습니다.`,
        stack: ["Angular7", "Sass"],
        youtube: "https://www.youtube.com/embed/jeXTYYE-4JU",
        mywork: [
          "프론트엔드 개발환경 셋팅 및 전체기능을 구현했습니다.",
          "반응형으로 구현하여 데스크탑 및 테블릿에서 사용하게 작업했습니다.",
          "데스크탑과 태블릿에서 사용할 수 있게 반응형으로 제작했습니다.",
          "Chart.js를 이용한 분석기능을 만들었습니다."
        ],
        memory: [
          "Angular Material같은 UI 라이브러리의 편리함을 잘 느낀 프로젝트였습니다.",
          "데이터 시각화를 위한 첫 작업이였습니다. 데이터가 많지 않아 쉬웠지만, 점점 늘어난다면 필터, 순서 등 고려할 것이 많다고 생각이 들었습니다."
        ]
      }
    ]
  },
  {
    name: "(주) 리브햇",
    subtitle:
      "(주)투어벨의 개발을 담당하는 자회사인 (주)리브햇의 개발팀 신입으로 투어벨의 모바일 사용자를 위한 모바일 웹 개발을 진행하였습니다.",
    date: "2018.07 ~ 2018.09",
    icon: "/assets/tourbell.png",
    project: [
      {
        title: "Tourbell 모바일 웹 개발",
        date: "2018.07 ~ 2018.09",
        worker: 2,
        subtitle:
          "모바일로 여행 패키지 예약하는 고객을 위해 개발된 프로젝트입니다 입니다. 기존 홈페이지가 모바일에 맞지 않고, 오래된 디자인이라는 지적이 있어서, 모바일 사용 고객들을 대상으로 진행했습니다. Ionic3을 이용해서 풀스텍 개발자 한분과 같이 개발을 진행했습니다.",
        link: "https://m.tourbell.co.kr",
        stack: ["Ionic3", "Sass"],
        mywork: [
          "카카오, 네이버, 페이스북 소셜 로그인 연동기능을 제안하고 개발했습니다.",
          "회원가입 및 비밀번호 변경, 마이페이지, 쿠폰 페이지, 기획전, 이벤트 페이지를  퍼블리싱 및 개발했습니다.",
          "예약 신청 및 예약 폼, 완료 페이지를 퍼블리싱하고, Angular FormGroup을 이용해서 기능을 개발했습니다."
        ]
      }
    ]
  }
];

export const details = {
  html: [
    "시멘틱 마크업을 준수하기 위해 노력합니다.",
    "다양한 브라우저를 지원할 수 있게 노력합니다.",
    "Sass, css-in-js (styled-component) 등의 방법을 활용할 수 있습니다."
  ],
  js: [
    "ES5, ES6 문법에 익숙하고, 최신 문법에 관심을 가지고 있습니다.",
    "타입스크립트에 관심을 갖고 주로 사용하려고 합니다."
  ],
  react: [
    "함수형 컴포넌트를 주로 사용하며 재사용성에 대해 고민합니다.",
    "Mobx를 이용해 상태관리를 할 수 있습니다.",
    "불필요한 렌더링을 최소화 하기위해 노력합니다."
  ],
  angular: [
    "공식 문서에서 지향하는 가이드를 지키려고 합니다.",
    "SPA에 대해 이해하고 있습니다."
  ]
};

export const Current: Array<Skill> = [
  { name: "HTML & CSS", url: "/assets/html.png", detail: details["html"] },
  { name: "Javascript", url: "/assets/js.png", detail: details["js"] },
  { name: "Typescript", url: "/assets/ts.png" },
  {
    name: "Styled Component",
    url: "/assets/styled.png"
  },
  { name: "Sass", url: "/assets/sass.png" },
  { name: "React", url: "/assets/react.png", detail: details["react"] },
  { name: "Angular", url: "/assets/angular.png", detail: details["angular"] },
  { name: "Mobx", url: "/assets/mobx.jpeg" }
];

export const Prev: Array<Skill> = [
  { name: "Ionic", url: "/assets/ionic.jpeg" },
  { name: "React Native", url: "/assets/react.png" },
  { name: "Redux", url: "/assets/Redux.png" },
  { name: "Rxjs", url: "/assets/rxjs.png" },
  { name: "Cypress", url: "/assets/cypress.jpeg" },
  { name: "Jest", url: "/assets/jest.png" },
  { name: "StoryBook", url: "/assets/storybook.png" },
  { name: "Figma", url: "/assets/figma.png" }
];

export const Support: Array<Skill> = [
  { name: "Slack", url: "/assets/slack.jpg" },
  { name: "notion", url: "/assets/notion.jpg" },
  { name: "PostMan", url: "/assets/postman.png" },
  { name: "zeplin", url: "/assets/zeplin.jpg" },
  { name: "Source tree", url: "/assets/sourcetree.png" },
  { name: "Google Lighthouse", url: "/assets/lighthouse.jpeg" },
  { name: "Eslint", url: "/assets/eslint.jpg" }
];

export const Extra = [
  {
    name: "방송통신대학교",
    date: "2018-02 ~ ",
    status: "컴퓨터 과학과 재학중"
  },
  {
    name: "패스트캠퍼스 프론트엔드 스쿨 과정",
    date: "2018-01 ~ 2018-04",
    status: "수료"
  },
  {
    name: "바리스타 및 카페 매니저 근무",
    date: "2012.03 ~ 2017.08",
    status: "바리스타 및 카페 매니저로 커피업계에서 6년 가까이 일을 했습니다."
  },
  { name: "한남대학교", date: "2008.02 ~ 2011.09", status: "교육학과 중퇴" }
];
