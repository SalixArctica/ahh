import React from 'react'
import styled from 'styled-components'
import * as colors from './colors.json'
import trees from '../../static/ecosystem.jpg'



const Container = styled.div`
    position: relative;
    min-height: 30vh;
    max-height: 90vh;
    text-align: center;
    height: fit-content;
    
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url(${trees});
        filter: brightness(60%);
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: bottom right; 
        z-index: -1;
    }
`;

const CenteredDiv = styled.div`
    position: relative;
    text-align: center;
    margin: auto;
    font-family: 'Roboto';
    color: ${colors.white};
    font-size: 3rem;
    padding: 2rem;

    & > * {
        margin: 0;
    }
    & > h1 {
        line-height: 20vh;
    }
`



export default ({ children }) => (
    <Container>
        <CenteredDiv>
            {children}
        </CenteredDiv>
    </Container>
)