import React from 'react';
import styled from 'styled-components';
import { Project } from './Project';
import { TABLET } from '../types';

const ExpBox = styled.div`
    padding: 5%;
    border: 1px solid lightgray;
    margin: 5vh 0;
    p {
        color: black;
        margin-bottom: 10px;
    }
`

const StackList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Stack = styled.span`
    background-color: lightgray;
    color: #6c757d;
    margin: 0 10px 10px 0;
    padding: 10px;
    border-radius: 10px;
    :nth-child(1) {
        margin-left: 0;
    }
    :hover {
        background-color: #222;
        color: white;
    }
`

const ProjectList = styled.ul`
    list-style: none;
    ${TABLET} {
        list-style: none;
        padding: unset;
    }
`

export const Exp = (props: any): JSX.Element => {
    const { career } = props;
    return (
        <ExpBox>
            <h3>{career.name}</h3>
            <p>{career.subtitle}</p>
            <StackList>
                {career.stack.map((item: string) => {
                    return <Stack key={item}>{item}</Stack>
                })}
            </StackList>
            <h4>주요 업무 내용</h4>
            <ProjectList>
                {career.project.map((item: any) => {
                    return <Project key={item.title} project={item}/>
                })}
            </ProjectList>
        </ExpBox>
    )
}

