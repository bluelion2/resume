import React, { useContext, memo } from "react";
import { StoreContext } from "../store";
import { Switch } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { TABLET } from "../types";

const SwitchSection: any = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  span {
    margin-right: 10px;
  }
  ${TABLET} {
    display: none;
  }
`;

const SwitchIcon = (): JSX.Element => {
  const { view }: any = useContext(StoreContext);
  const handleChange = (checked: boolean): void => {
    view[1](checked);
  };

  return (
    <SwitchSection>
      <span>{view[0] ? "PDF" : "Icon"}</span>
      <Switch onChange={handleChange} />
    </SwitchSection>
  );
};

export default memo(SwitchIcon);
