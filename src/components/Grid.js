import React from 'react';
import styled from 'styled-components';

const styledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col ? props.col : 2}, 1fr);
`;

export default styledGrid;