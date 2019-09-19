import React from 'react'
import styled from 'styled-components'
import * as colors from './colors.json';


const Container = styled.div`
    background-color: ${colors.white};
    padding: 3rem 20vw 10rem 20vw;
    margin: -2rem 3rem 0rem 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-justify: auto;
    position: relative;
    z-index: 0;

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

const Footer = styled.div`
    background: #454545;
    color: white;
    padding: 0rem 20vw 1rem 20vw;
    margin: -2rem 3rem 0rem 3rem;
    font-size: 1.5rem;
    text-justify: auto;
    position: relative;
    z-index: 1;

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px white solid;
`

export default ({children}) => (
    <div>
    <Container>
        {children}
        
    </Container>
    <Footer style={{fontSize: '1rem'}}>
        <Grid>
            <p>Statement</p>
            <p>Essays</p>
            <p>Members</p>
            <p>Contact</p>
        </Grid>
        <p>Developed by Tankcaster</p>
    </Footer>
    </div>
);