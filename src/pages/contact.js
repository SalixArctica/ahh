import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

export default () => (
    <Layout>
        <Banner>
            <h1>Contact</h1>
        </Banner>
        <Container>
            <p>Have questions? Want to know more about joining? Get in touch!</p>
            <p>feel free to email us at <u>contact@historicalheathenry.org</u></p>
            <p>or fill out the following form</p>

            <label>Name
                <input type='text'></input>
            </label>
            <label>Email
                <input type='text'></input>
            </label>
            <label>Message
                <textarea></textarea>
            </label>
        </Container>
    </Layout>
)