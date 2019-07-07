import React from 'react';
import styled from 'styled-components';

const BottomButtonBox = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    margin-top: -15px;
`

const BottomButtonArrow = styled.i`
    border: 1px solid lightgray;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: -15px;
`

export const BottomButton = (props: {down: () => void}) => {
    return (
        <BottomButtonBox onClick={props.down}>
            <BottomButtonArrow/>
        </BottomButtonBox>
    )
}