import React, { useContext } from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { TABLET, MOBILE } from "../types";
import { IExpList, IProject } from "../interface/type";
import { StoreContext } from "../store";

const ExpBox = styled.div`
  padding: 3% 10%;
  border: 1px solid lightgray;
  margin: 2vh 0;
  p {
    margin-bottom: 10px;
    margin-left: 38px;
    ${MOBILE} {
      margin-left: 0;
    }
  }
`;

const ProjectList = styled.ol`
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
  const { view }: any = useContext(StoreContext);

  return (
    <ExpBox>
      <Icon src={career.icon} alt={career.name} />
      <h3>{career.name}</h3>
      <p>{career.date}</p>
      <p>{career.subtitle}</p>
      <h4>주요 업무 내용</h4>
      <ProjectList>
        {career.project.map((item: IProject["project"]) => (
          <Project key={item.title} project={item} view={view[0]} />
        ))}
      </ProjectList>
    </ExpBox>
  );
};
