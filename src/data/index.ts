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
        stack: ["React", "Mobx", "Redux", "Sass", "Typescript"],
        mywork: [
          "Redux thunk 상태관리를 Mobx로 변경 (Mobx4)",
          "IE11부터 모던 브라우저 까지의 서비스 지원",
          "코드 리팩토링을 통해 컴포넌트의 재사용성을 높이려 함",
          "서비스 정책과 기능 개발 히스토리 정리"
        ]
      }
    ]
  },
  {
    name: "(주) 열두달",
    subtitle:
      "단체음식을 배송 하는 Fooding의 프론트엔드 개발자로 근무를 하면서 쇼핑사이트 유지보수와 내부적으로 필요한 Admin Page, 배송기사용 앱을 백엔드 개발자 한분과 개발하였습니다.",
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
        mywork: ["Mobx를 이용한 상태관리", "퍼블리싱 작업"]
      },
      {
        title: "Fooding Delivery App 개발",
        date: "2019.02 ~ 2019.03",
        worker: 2,
        subtitle:
          "배송 서비스를 원활하게 진행하기 위해 내부 배송기사용 앱을 개발했습니다. 많은 기능이 필요하지 않고, 빠른 시간 내에 개발해야 했기 때문에, Ionic4로 개발을 하였습니다.",
        link:
          "https://play.google.com/store/apps/details?id=app.fooding.delivery",
        youtube: "https://www.youtube.com/embed/_tYefWU1kzY",
        stack: ["Ionic4", "Sass"],
        mywork: [
          "프론트엔드 개발환경 셋팅 및 전체 기능 구현과 구글 플레이스토어 배포",
          "안드로이드 태블릿 및 모바일에 맞게 개발"
        ]
      },
      {
        title: "Fooding 개발 및 유지보수",
        date: "2018.10 ~ 2019.07",
        worker: 1,
        subtitle:
          "외주로 부터 개발된 fooding.io 를 인계받아 개선하는 작업을 진행하였습니다. 요청에 따라 사이트 내 정기배송 소개페이지 등 추가 개발도 진행하였습니다. 이와 관련해서 개선하기 위한 경험을 간단히 이야기 해보았습니다.",
        link:
          "https://drive.google.com/open?id=1TQQJSFa6Em6CX0D9NRdAxvY2dRxQQ6K_",
        youtube: "https://www.youtube.com/embed/jQ1YNnLlUKs",
        stack: ["Angular7", "Sass"],
        mywork: [
          "코드 리팩토링, Angular 공식문서에서 제안하는 개발 방법을 적용해 구조 개선",
          "정기배송 신청 서비스 페이지 퍼블리싱, 개발",
          "초기 로딩속도 개선"
        ]
      },
      {
        title: "Admin Page 제작",
        date: "2018.10 ~ 2018.12",
        worker: 1,
        subtitle: `푸딩 웹사이트를 관리하기 위한 Admin Page 개발 및 유지보수를 담당했습니다.
          기획안에 기능 외에는 따로 디자인이 없어 Angular Material을 이용하여 작업을 하였습니다. 완성 후 추가적인 개발 요청이 들어올 때마다 진행되었습니다.`,
        stack: ["Angular7", "Sass"],
        youtube: "https://www.youtube.com/embed/jeXTYYE-4JU",
        mywork: [
          "프론트엔드 개발환경 셋팅 및 전체기능 구현",
          "반응형으로 구현하여 데스크탑 및 테블릿 사용지원",
          "Chart.js를 이용한 주문 확인 차트와 Excel 변환지원"
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
          "모바일로 패키지 예약하는 고객을 위해 개발된 모바일 웹 입니다. 1차 개발 중반부터 참여를 시작하였으며, 풀스택 개발자 한분과 같이 작업하였습니다. 기존 기획안을 바탕으로 개발하면서, 일부 개선방안을 제안하거나, 소셜 로그인 도입을 건의 및 추가하였습니다.",
        link: "https://m.tourbell.co.kr",
        stack: ["Ionic3", "Sass"],
        mywork: [
          "카카오, 네이버, 페이스북 소셜 로그인 연동을 제안, 개발을 하였습니다.",
          "회원가입 및 비밀번호 변경, 마이페이지, 쿠폰 페이지, 기획전, 이벤트 페이지 개발",
          "예약 신청 flow 관련 페이지 제작 (예약 신청 및 예약 폼, 완료 페이지)"
        ]
      }
    ]
  }
];

export const details = {
  html: [
    "시멘틱 마크업을 준수하기 위해 노력합니다.",
    "다양한 브라우저를 지원할 수 있게 노력합니다."
  ],
  css: [
    "Sass, css-in-js (styled-component) 등의 방법을 활용할 수 있습니다.",
    "다양한 브라우저를 지원할 수 있게 노력합니다."
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
  { name: "HTML", url: "/assets/html.png", detail: details["html"] },
  { name: "Javascript", url: "/assets/js.png", detail: details["js"] },
  { name: "Typescript", url: "/assets/ts.png" },
  { name: "CSS", url: "/assets/css.png", detail: details["css"] },
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
  { name: "방송통신대학교", date: "2018-02 ~ ", status: "재학중" },
  {
    name: "패스트캠퍼스 프론트엔드 스쿨 과정",
    date: "2018-01 ~ 2018-04",
    status: "수료"
  },
  { name: "한남대학교", date: "2008-02 ~ 2011.09", status: "중퇴" }
];
