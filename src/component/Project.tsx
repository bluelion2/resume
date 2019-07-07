import React from 'react';
import styled from 'styled-components';
import { TABLET } from '../types';
import { IProject } from '../interface/interface';

const ProjectItem = styled.li`
    list-style: none;
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px dotted lightgray;
    :nth-child(1) {
        padding: 0 0 20px 0;
    }
    :nth-last-child(1) {
        border-bottom: none;
    }
    ul {
        margin: 20px 0;
        ${TABLET} {
            list-style: none;
            padding: unset;
        }
    }
`

const MyWork = styled.li`
    margin: 10px 0;
`

export const Project = (props: IProject): JSX.Element => {
    const { project } = props;
    return (
        <ProjectItem>
            <h4>{project.title}</h4>
            <p>{project.subtitle}</p>
            <ul>
                <li>작업 기간 : {project.date}</li>
                {project.mywork.map((work: string) => {
                    return <MyWork key={work}>{work}</MyWork>
                })}
                {project.link ? <a href="project.link">link</a> : null}
            </ul>
        </ProjectItem>
    )
}