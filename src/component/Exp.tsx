import React from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { TABLET, MOBILE } from "../types";
import { IExpList } from "../interface/interface";

const ExpBox = styled.div`
  padding: 5%;
  border: 1px solid lightgray;
  margin: 5vh 0;
  p {
    color: black;
    margin-bottom: 10px;
    margin-left: 35px;
    ${MOBILE} {
      margin-left: none;
    }
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  ${TABLET} {
    list-style: none;
    padding: unset;
  }
`;

const Icon = styled.img`
  max-width: 70px;
  background-size: contain;
`;

export const Exp = (props: { career: IExpList }): JSX.Element => {
  const { career } = props;
  return (
    <ExpBox>
      <Icon src={career.icon} alt={career.name} />
      <h3>{career.name}</h3>
      <p>{career.subtitle}</p>
      <h4>주요 업무 내용</h4>
      <ProjectList>
        {career.project.map((item: any) => (
          <Project key={item.title} project={item} />
        ))}
      </ProjectList>
    </ExpBox>
  );
};
