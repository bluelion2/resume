import React, { useContext } from "react";
import styled from "styled-components";
import { SkillList } from "../component";
import { Exps } from "./Exps";
import { Current, Prev, Support } from "../data";
import { StoreContext } from "../store";
import { Extras } from "./Extras";

const Skill = [
  { title: "Skill", list: Current },
  { title: "최근 관심이 있거나, 사용한 경험이 있는 기술입니다.", list: Prev },
  { title: "Support Tools", list: Support }
];
const MainContainer = styled.main`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5vh;
`;

export const Main = (): JSX.Element => {
  const { view }: any = useContext(StoreContext);
  return (
    <>
      <MainContainer>
        <Exps />
        {view[0] ? (
          <SkillList
            list={Skill[0].list}
            title={Skill[0].title}
            view={view[0]}
          />
        ) : (
          <section>
            {Skill.map((item, index) => (
              <SkillList
                key={`skill-${index}`}
                list={item.list}
                title={item.title}
                view={view[0]}
              />
            ))}
          </section>
        )}
        <Extras />
      </MainContainer>
    </>
  );
};
