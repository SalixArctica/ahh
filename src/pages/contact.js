import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import { TextInput, TextArea, Button } from '../components/InputElems';
import Grid from '../components/Grid';

export default () => (
    <Layout>
        <Banner>
            <h1>Contact</h1>
        </Banner>
        <Container>
            <p>Have questions? Want to know more about joining? Get in touch!</p>
            <p>feel free to email us at <u>contact@historicalheathenry.org</u></p>
            <p>or fill out the following form:</p>

            <Grid>
                <TextInput label='Name'/>
                <TextInput label='Email'/>
                <TextArea label='Message' span='2'/>
            </Grid>
            <Button></Button>
            
        </Container>
    </Layout>
)