import React from "react";
import styled from "styled-components";
import { Exp } from "../component";
import { ExpList } from "../data";

export const ExpContainer = styled.section`
  padding: 5% 10%;
  border: 1px solid black;
  background-color: white;
  color: black;
`;

export const Exps = (): JSX.Element => (
  <ExpContainer>
    <h2>Work Experience</h2>
    {ExpList.map(exp => (
      <Exp career={exp} key={exp.name} />
    ))}
  </ExpContainer>
);
