import React from 'react';
import styled from 'styled-components';
import { Profile } from './Profile';
import { Skills } from './Skills';
import { Exps } from './Exps';

const MainContainer = styled.main`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`

export const Main = (): JSX.Element => {
    return (
        <>
           <MainContainer>
                <Profile/>
                <Skills/>
                <Exps/>
           </MainContainer>
        </>
    )
}