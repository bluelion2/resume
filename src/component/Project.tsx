import React from "react";
import styled from "styled-components";
import { TABLET, MOBILE } from "../types";
import { IProject } from "../interface/type";
import { Icon } from "antd";

const ProjectItem = styled.li`
  list-style: none;
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px dotted lightgray;
  h4,
  h5 {
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
    margin-left: 5px;
  }

  iframe {
    width: 100%;
    border-width: unset;
    border-style: unset;
    height: 300px;
    ${MOBILE} {
      height: 180px;
    }
  }
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 35px;
  ${MOBILE} {
    margin-left: none;
  }
  span {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const Stack = styled.span`
  background-color: skyblue;
  color: white;
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

export const Project = ({
  project,
  view
}: {
  project: IProject["project"];
  view: boolean;
}): JSX.Element => {
  return (
    <ProjectItem>
      <h4>
        {project.title}
        <span>{project.date}</span>
      </h4>
      <p>
        {project.subtitle}
        {!view && project.link ? (
          <a target="_blank" rel="noopener noreferrer" href={project.link}>
            <Icon type="arrow-right" />
          </a>
        ) : null}
      </p>
      <StackList>
        <span>Stack :</span>
        {view
          ? project.stack.map((item: string, index) => (
              <span key={`${index}-${item}`}>{`${item}`}</span>
            ))
          : project.stack.map((item: string, index) => (
              <Stack key={`${item}-${index}`}>{item}</Stack>
            ))}
      </StackList>
      <h5>My Work</h5>
      <ul>
        {project.mywork.map((work: string, index) => (
          <li key={`${work}-${index}`}>{work}</li>
        ))}
        {!view && project.youtube ? (
          <iframe src={project.youtube} title="youtube"></iframe>
        ) : null}
      </ul>
      {project.memory && (
        <>
          <h5>기억에 남는 점</h5>
          <ul>
            {project.memory.map(text => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </>
      )}
    </ProjectItem>
  );
};
