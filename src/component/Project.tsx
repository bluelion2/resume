import React from "react";
import styled from "styled-components";
import { TABLET, MOBILE } from "../types";
import { IProject } from "../interface/interface";
import { Icon } from "antd";

const ProjectItem = styled.li`
  list-style: none;
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px dotted lightgray;
  h4 {
    span {
      margin-left: 10px;
      font-weight: normal;
      font-size: 14px;
    }
    ${MOBILE} {
      display: flex;
      flex-direction: column;
      span {
        text-align: end;
        margin-top: 7px;
      }
    }
  }
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
  a {
    display: inline-flex;
    margin-left: 5px;
  }
`;

const MyWork = styled.li`
  margin: 10px 0;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 35px;
  ${MOBILE} {
    margin-left: none;
  }
`;

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
`;

export const Project = (props: IProject): JSX.Element => {
  const { project } = props;
  return (
    <ProjectItem>
      <h4>
        {project.title}
        <span>{project.date}</span>
      </h4>
      <p>
        {project.subtitle}
        {project.link ? (
          <a target="_blank" href={project.link}>
            <Icon type="arrow-right" />
            보러가기
          </a>
        ) : null}
      </p>
      <StackList>
        {project.stack.map((item: string) => (
          <Stack key={item}>{item}</Stack>
        ))}
      </StackList>
      <h4>My Work</h4>
      <ul>
        {project.mywork.map((work: string) => (
          <MyWork key={work}>{work}</MyWork>
        ))}
        {project.youtube ? <iframe src={project.youtube}></iframe> : null}
      </ul>
    </ProjectItem>
  );
};
