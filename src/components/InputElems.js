import React from 'react';
import styled from 'styled-components';
import * as colors from './colors.json';

const StyledInput = styled.input`
    display: block;
    font-size: 1rem;
`

const StyledSelect = styled.select`
    display: block;
    font-size: 1rem;
`

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 1rem;
    margin-right: 1rem;
`

export { StyledInput, StyledSelect, StyledLabel};