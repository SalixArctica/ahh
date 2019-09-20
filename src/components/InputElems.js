import React from 'react';
import styled from 'styled-components';
import * as colors from './colors.json';

const Label = styled.label`
    display: block;
    margin-top: 1rem;
    grid-column: ${props => props.span ? '1 / span ' + props.span: null}
`
const Tinput = styled.input`
    display: block;
    width: 80%;
    font-size: 1.5rem;
`

const Tarea = styled.textarea`
    width: 100%;
    grid-column: 1 / span 2;
    min-height: 10rem;
    font-size: 1.5rem;
`

const DaButton = styled.button`
    background-color: #CB725B;
    font-size: 2rem;
    border-radius: 5px;
    padding: .7rem;
    border: none;
    margin: 1rem 0 1rem 0;
    cursor: pointer;
    border: 2px solid ${colors.brown};
`

const TextInput = (props) => (
    <Label>
        {props.label}
        <Tinput type='text' onChange={props.onChange}></Tinput>
    </Label>
)

const TextArea = (props) => (
    <Label span={props.span}>
        {props.label}
        <Tarea></Tarea>
    </Label>
)

const Button = (props) => (
    <DaButton onClick={props.onClick}>Submit</DaButton>
)

export { TextInput, TextArea, Button }