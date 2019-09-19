import React from 'react'
import styled from 'styled-components'
import * as colors from './colors.json';


const Container = styled.div`
    background-color: ${colors.white};
    padding: 3rem 20vw;
    margin: -2rem 3rem 5rem 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-justify: auto;
    position: relative;

    @media only screen and (max-width: 1000px) {
        padding: 3rem 10vw;
        margin: -2rem 2rem 5rem 2rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 3rem 10vw;
        margin: -2rem 0 5rem 0;
        padding: 3rem 2rem;
    }
`

export default ({children}) => (
    <Container>
        {children}
    </Container>
);