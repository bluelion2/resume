import React from "react";
import { ExpContainer } from "./Exps";
import { IExpList } from "../interface/interface";
import { Exp } from '../component';

const EtcList: Array<IExpList> = [
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
];

// 나중에 업뎃 하기
const Etc = (): JSX.Element => {
  return (
    <ExpContainer>
      <h2>그 외. 활동들..</h2>
      {EtcList.map(item => <Exp career={item} key={item.name}/>)}
    </ExpContainer>
  )
}

export default Etc;