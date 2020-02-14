import React from "react";
import { SkillList } from "../component";
import { Current, Prev, Support } from "../data";

export const Skills = (): JSX.Element => (
  <section>
    <h2>Skill</h2>
    <SkillList list={Current} title="주로 사용한 기술입니다." />
    <SkillList
      list={Prev}
      title="최근 관심이 있거나, 사용한 경험이 있는 기술입니다."
    />
    <SkillList list={Support} title="Support Tools" />
  </section>
);
