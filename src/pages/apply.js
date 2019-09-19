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
            <GridDiv>
            <div>
                <Pnomargins><strong>Tradition</strong></Pnomargins>
                <Input type='text' list='tradition'/>
                <datalist id="tradition">
                    <option value="Norse"/>
                    <option value="Saxon"/>
                    <option value="Frissian"/>
                    <option value="Anglish"/>
                    <option value="Icelandic"/>
                </datalist>
            </div>
            <div>
                <Pnomargins><strong>Location</strong></Pnomargins>
                <Input type='text' list='tradition'/>
                <datalist id="tradition">
                    <option value="Norse"/>
                    <option value="Saxon"/>
                    <option value="Frissian"/>
                    <option value="Anglish"/>
                    <option value="Icelandic"/>
                </datalist>
            </div>
            <div>
                <Pnomargins><strong>Location</strong></Pnomargins>
                <Input type='text' list='tradition'/>
                <datalist id="tradition">
                    <option value="Norse"/>
                    <option value="Saxon"/>
                    <option value="Frissian"/>
                    <option value="Anglish"/>
                    <option value="Icelandic"/>
                </datalist>
            </div>
            </GridDiv>
        </Container>
    </Layout>
)