import React from "react"
import { graphql, Link } from 'gatsby' 
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Grid from '../components/Grid';


export default ({ data }) => (
    <Layout>
        <Banner>
            <Logo/>
        </Banner>
        <Container>
            <h1>Welcome!</h1>
            <p>Welcome to the home page of the Association for Historical
            Heathenry!
            The Association for Historical Heathenry is a loose confederation of
            heathen families, communities, and formal organizations. We are
            bound together by our shared commitment to observing the pre-
            Christian Germanic religions (also called the Old Sid, or variations
            thereof) in general accordance with the ideals expressed in our
            General Statement.
            </p>
            <p>The AHH was formed to serve two major purposes: First, we aim to
            divorce historical heathenry from other forms of modern paganism
            that do not observe historical practices, such as Asatru. We hope to
            accomplish this by helping to educate heathens and non-heathens
            alike about the historical record regarding Old Sid practices.
            Second, and more importantly, the AHH aims to further the growth
            and development of the Old Sid in the modern world by pulling like-
            minded heathens together and providing a forum in which they may
            network and share ideas. To this end, we have compiled a directory
            of Old Sid individuals, families, informal communities, and formal
            organizations that share our commitment to historical heathenry and
            its growth.
            </p>
            <p>
            If you are new to heathenry, please visit our directory to see if there
            are any AHH heathens in your area and use the provided contact
            information to reach out to them as soon as you feel comfortable to
            do so. We have also compiled a large catalogue of freely available
            sources for you to explore on our recommended reading page.
            If you, your family, your community, or your organization would like
            to join us in taking a stand for historical heathenry, and help us in
            our mission to help revive the true Old Sid, you may apply to be
            included on our directory here.</p>

            <h2 style={{borderBottom: '1px solid black', marginBottom: '.5rem'}}>Recent Posts</h2>
            <Grid col='3'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link to={node.fields.slug} style={{marginRight: '1rem'}}>
                        <div key={node.id}  style={{"marginBottom": "5rem"}}> 
                        <h5 style={{marginBottom: '0'}}>
                            {node.frontmatter.title}{" "}
                        </h5>
                        <p style={{fontSize: '1rem'}}>{node.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </Grid>
        </Container>
    </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`