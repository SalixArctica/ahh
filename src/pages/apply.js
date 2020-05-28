import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import styled from 'styled-components';

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Input = styled.input`
    font-size: 2rem;
`

const Pnomargins = styled.p`
    margin:0;
`

export default () => (
    <Layout>
        <Banner>
            <h1>Apply for Membership</h1>
        </Banner>
        <Container>
            
        </Container>
    </Layout>
)