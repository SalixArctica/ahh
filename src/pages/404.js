import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

export default () => (
    <Layout>
        <Banner>
            <h1>404</h1>
        </Banner>
        <Container>
            <p style={{textAlign: "center"}}>It seems this page doesn't exist</p>
        </Container>
    </Layout>
)