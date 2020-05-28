import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid'
import { Link } from 'gatsby';

const Title = styled.h3`
    display: inline;
`

const MemberCard = styled.div`
    margin: 0 0 1rem 0;
    border-bottom: 1px solid black;
    background: slategrey;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
`

const Location = styled.p`
    color: lightgray;
    text-align: right;
    margin: 0;
`

const StyledGrid = styled(Grid)`
    background: white;
    color: black;
    overflow: hidden;
    max-height: ${props => props.expanded ? '20rem' : '0px'};
    transition: max-height .2s ease-in-out;
    border-radius: 0 0 1rem 1rem;
    border: 5px solid slategray;
`

const StyledP = styled.p`
    margin: 1rem;
`



export default ({member}) => {

    const [ expanded, setExpanded ] = useState(false);

    return(
        <MemberCard onClick={() => {setExpanded(!expanded); console.log(expanded)}}>
            <Grid style={{padding: '1rem'}}>
                <div>
                    <Title>{member.title}</Title>
                </div>
                <div>
                    <Location>{member.location}</Location>
                </div>
            </Grid>
            <StyledGrid expanded={expanded}>
                <StyledP>{member.tradition}</StyledP>
                <StyledP>{member.contact}</StyledP>
                <StyledP>{member.website}</StyledP>
                <StyledP>{member.classification}</StyledP>
            </StyledGrid>
        </MemberCard>
    )
}