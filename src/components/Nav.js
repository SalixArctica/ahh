import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from "gatsby"
import * as colors from './colors.json';

const Nav = styled.div`
    margin: 0;
    background: ${colors.green};
    color: ${colors.white};
    display: flex;
    position: sticky;
    top: 0;
    z-index: 5;
`;

const Title = styled.h1`
    margin: .5rem 1rem;
`;

const Styledul = styled.ul`
    margin: auto 1rem auto auto;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

const Styledli = styled.li`
    display: inline;
    margin: 0 1rem;
    vertical-align: center;
    font-size: 1.5rem;
    color: ${colors.white};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default () => (
    <Nav>
        <Title><StyledLink to='/'>AHH</StyledLink></Title>
        <Styledul>
            <Styledli><StyledLink to='/about'>Statement</StyledLink></Styledli>
            <Styledli><StyledLink to='/blog'>Essays</StyledLink></Styledli>
            <Styledli><Link to='/members'>Members</Link></Styledli>
            <Styledli><Link to='/contact'>Contact</Link></Styledli>
        </Styledul>
    </Nav>
)