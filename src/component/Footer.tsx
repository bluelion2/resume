import React from "react";
import styled from "styled-components";
import { MOBILE } from "../types";

const FooterBox = styled.footer`
  height: 12vh;
  font-size: 1.2rem;
  background-color: #f0f0f0;
  color: black;
  padding: 5%;
  h1 {
    margin: unset;
  }
  ${MOBILE} {
    font-size: 0.9rem;
  }
`;

export const Footer = (): JSX.Element => (
  <FooterBox>
    <h1>Contact</h1>
    <ul>
      <li>
        <a target="_blank" href="https://github.com/bluelion2">
          Github
        </a>
      </li>
      <li>
        <a href="mailto:iltk2000@gmail.com">이메일</a>
      </li>
      <li>
        <a target="_blank" href="https://www.facebook.com/Hun89">
          페이스북
        </a>
      </li>
    </ul>
  </FooterBox>
);
