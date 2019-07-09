import React from 'react';
import { Main } from './container';
import { Footer, Header } from './component';

export default class App extends React.Component<{}> {

  render(): JSX.Element {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}