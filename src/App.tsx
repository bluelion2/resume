import React from 'react';
import { Main } from './container';
import { Footer, Header } from './component';

const App = (): JSX.Element => {
    return <>
        <Header/>
        <Main/>
        <Footer/>
    </>
};

export default App;

