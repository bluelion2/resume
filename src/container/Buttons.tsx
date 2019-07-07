import React from 'react';
import styled from 'styled-components';
import { TopButton, BottomButton } from '../component';

const ButtonBox = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
`

interface IProps {
    up: () => void;
    down: () => void;
    counter: number;
}

export const ButtonContainer = (props: IProps): JSX.Element => {
    const { down, up, counter } = props;
    return (
        <ButtonBox>
            { counter ? <TopButton up={up}/> : null }
            { counter < 4 ? <BottomButton down={down}/> : null }
        </ButtonBox>
    )
}