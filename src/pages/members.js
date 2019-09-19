import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Container from '../components/Container'
import Logo from '../../static/logo.png'
import Card from '../components/Card'
import { Link } from 'gatsby'

const dummyData = [
    {
        title: 'Northeast Oklahoma Sid Association',
        location: 'Tulsa, OK',
        tradition: 'Anglish',
        contact: 'contact@nosa.org',
        website: 'nosa.org',
        classification: 'organization'
    },
    {
        title: 'Desert Heathens',
        location: 'Las Vegas, NV',
        tradition: 'Norse',
        contact: 'samtheman@gmail.com',
        website: 'NA',
        classification: 'family'
    },
    {
        title: 'Nondescript Sid Organization',
        location: 'Redacted, NA',
        tradition: 'Unknown',
        contact: 'contact@email.com',
        website: 'website.com',
        classification: 'Unincorporated Group'
    },
    {
        title: 'Northeast Oklahoma Sid Association',
        location: 'Tulsa, OK',
        tradition: 'Anglish',
        contact: 'contact@nosa.org',
        website: 'nosa.org',
        classification: 'organization'
    }
]

export default () => (
    <Layout>
        <Banner>
            <h1>Our Member Organizations</h1>
        </Banner>
        <Container> 
            <p>Organizations and families commited to being the living continuation of the Old Sid</p>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            {dummyData.map(org => {
                return(
                    <Card
                        title={org.title}
                        location={org.location}
                        tradition={org.tradition}
                        contact={org.contact}
                        website={org.website}
                        classification={org.classification}
                    />
                );
            })}
            </div>
        </Container>
    </Layout>
)
