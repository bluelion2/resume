import React from "react";
import { ExpContainer } from "./Exps";
import { Extra } from "../data";

export const Extras = () => {
  return (
    <ExpContainer>
      <h2>그 외</h2>
      {Extra.map(item => {
        return (
          <div>
            <p>{item.date}</p>
            <p>
              - {item.name} / {item.status}
            </p>
          </div>
        );
      })}
    </ExpContainer>
  );
};
