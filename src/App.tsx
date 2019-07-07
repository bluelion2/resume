import React from 'react';
import { Main, ButtonContainer } from './container';
import { Footer, Header } from './component';
import { inject, observer } from 'mobx-react';
import AppStore from './store/AppStore';

@inject('store')
@observer
export default class App extends React.Component<{store? : AppStore}> {

  render() {
    const { store }: any = this.props;
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
        <ButtonContainer
          down={store.handleDown}
          up={store.handleUp}
          counter={store.counter}
        />
      </>
    )
  }
}