import React, { createContext, useState } from "react";

export const StoreContext = createContext({});

export default ({ children }: { children: JSX.Element }) => {
  const [view, setView] = useState(false);
  const store = {
    view: [view, setView]
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
