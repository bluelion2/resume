import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../store";

const FooterBox = styled.footer`
  background-color: #f0f0f0;
  padding: 5%;
  a {
    color: black;
  }
`;

const UlBox = styled.footer`
  ul {
    list-style: none;
    margin-right: 50px;
    text-align: end;
  }
`;

export const Footer = (): JSX.Element | null => {
  const { view }: any = useContext(StoreContext);
  if (view[0])
    return (
      <UlBox>
        <ul>
          <li>Github: https://github.com/bluelion2</li>
          <li>Mail: iltk2000@gmail.com</li>
        </ul>
      </UlBox>
    );
  return (
    <FooterBox>
      <h2>Contact</h2>
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
};
