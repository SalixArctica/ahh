import React from 'react';
import styled from 'styled-components';
import * as colors from './colors.json'

const CardContainer = styled.div`
    box-shadow: 10px 5px 5px ${colors.gray};
    border: 1px solid grey;
    margin: 1rem 1rem;

    & > h3 {
        padding: 1rem;
        margin: 0;
        border-bottom: 1px solid black;
        background-color: ${colors.brown};
        color: ${colors.white};
    }
`

const InnerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > p {
       margin: 0 1rem;
    } 
`

export default (props) => {
    return(
        <CardContainer>
            <h3>{props.title}</h3>
            <InnerCard>
                <p>location: {props.location}</p>
                <p>tradition: {props.tradition}</p>
                <p>contact: {props.contact}</p>
                <p>website: {props.website}</p>
                <p>classification: {props.classification}</p>
            </InnerCard>
        </CardContainer>
    );
}