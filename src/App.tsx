import React from "react";
import { Main, Profile } from "./container";
import { Footer } from "./component";
import Switch from "./component/Switch";

const App = (): JSX.Element => {
  return (
    <>
      <Switch />
      <Profile />
      <Main />
      <Footer />
    </>
  );
};

export default App;
