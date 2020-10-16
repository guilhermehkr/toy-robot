import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        text-align: center;
    }
`;

const Box = css`
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 440px;
    margin: 0;
    padding: 8px 14px;
    font-family: sans-serif;
    font-size: 18px;
    text-align: left;
    line-height: 26px;
    border-radius: 4px;
    resize: none;
`;

export const BoxContainer = styled.div`
    margin: 40px 0 40px;
`;

export const CommandsBox = styled.textarea`
    ${Box}
`;

export const ResultBox = styled.pre`
    ${Box}
    background-color: #cccccc;
`;

export const Title = styled.h1``;
