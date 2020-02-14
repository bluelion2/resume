import React from "react";
import styled from "styled-components";
import { MOBILE, TABLET } from "../types";

const HeaderBox = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;

  ${TABLET} {
    font-size: 1.2rem;
  }

  ${MOBILE} {
    font-size: 0.7rem;
  }
`;

export const Header = (): JSX.Element => (
  <HeaderBox>
    <h1>Hello World</h1>
  </HeaderBox>
);
