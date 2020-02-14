import React from "react";
import styled from "styled-components";
import { SkillItem } from "./SkillItem";
import { Skill } from "../interface/interface";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SkillList = (props: { title: string; list: Array<Skill> }) => {
  const { title, list } = props;
  return (
    <>
      <h3>{title}</h3>
      <List>
        {list.map(item => (
          <SkillItem name={item.name} url={item.url} key={item.name} />
        ))}
      </List>
    </>
  );
};
