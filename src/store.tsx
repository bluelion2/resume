import React, { createContext, useState } from 'react'

export const StoreContext = createContext({} as StoreValue)

export default ({ children }: { children: JSX.Element }) => {
  const [styleOption, setStyleOption] = useState(false)
  const store: StoreValue = {
    printStyle: [styleOption, setStyleOption],
  }
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export type StoreValue = {
  printStyle: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
