import React from 'react';
import { Main } from './container';
import { Footer, Header } from './component';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
