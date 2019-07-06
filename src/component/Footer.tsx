import React from 'react';
import styled from 'styled-components';
import { MOBILE } from '../types';

const FooterBox = styled.footer`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f0f0f0;
    color: black;
    ${MOBILE} {
        font-size: 0.9rem;
    }   
`;

export const Footer = (): JSX.Element => {
    return (
        <FooterBox>
            Copyright by Seunghun Kang
            <a className="github" href="https://github.com/bluelion2"></a>         
        </FooterBox>
    )
}