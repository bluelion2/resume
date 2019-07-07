import React from 'react';
import styled from 'styled-components';

const TopbuttonBox = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
`

const TopButtonArrow = styled.i`
    border: 1px solid lightgray;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
`

export const TopButton = (props: {up: () => void}) => {
    return (
        <TopbuttonBox onClick={props.up}>
            <TopButtonArrow/>
        </TopbuttonBox>
    )
}