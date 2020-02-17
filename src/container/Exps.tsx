import React from "react";
import styled from "styled-components";
import { Exp } from "../component";
import { ExpList } from "../data";
import { TABLET } from "../types";

export const ExpContainer = styled.section`
  width: 1024px;
  margin: 0 auto;
  ${TABLET} {
    width: 90%;
  }
`;

export const Exps = (): JSX.Element => {
  return (
    <ExpContainer>
      <h2>Work Experience</h2>
      {ExpList.map(exp => (
        <Exp career={exp} key={exp.name} />
      ))}
    </ExpContainer>
  );
};
