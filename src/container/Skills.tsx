import React from 'react';
import styled from 'styled-components';
import { SkillList } from '../component';
import { Skill } from '../interface/interface';

const SkillBox = styled.div`
    padding: 5% 10%;
`

const Current: Array<Skill> = [
    { name: 'React', url: '/assets/react.png' },
    { name: 'React Native', url: '/assets/react.png' },
    { name: 'Mobx', url: '/assets/mobx.jpeg' },
    { name: 'Typescript', url: '/assets/ts.png' },
]

const Prev: Array<Skill> = [
    { name: 'Angular', url: '/assets/angular.png' },
    { name: 'Rxjs', url: '/assets/rxjs.png' },
    { name: 'Ionic', url: '/assets/ionic.jpeg' },
    { name: 'Scss', url: '/assets/sass.png' },
]

export const Skills = (): JSX.Element => {
    return (
        <SkillBox>
            <h2>Skill</h2>
            <SkillList list={Current} title="최근 주로 사용한 기술입니다."/>
            <SkillList list={Prev} title="사용한 경험이 있는 기술입니다."/>
        </SkillBox>
    )
}