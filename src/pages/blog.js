import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Container from '../components/Container'
import Banner from '../components/Banner'
import Grid from '../components/Grid'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Banner>
          <h1>Blog</h1>
      </Banner>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div key={node.id}  style={{"marginBottom": "5rem"}}> 
              <Grid style={{borderBottom: '1px solid black'}}>
              <h3 style={{marginBottom: '0px'}}>
                {node.frontmatter.title}{" "}
                <span style={{color: 'grey'}}>
                  — {node.frontmatter.author}
                </span>
              </h3>
              <p style={{marginBottom: '0', verticalAlign: 'baseline', textAlign: 'right', color: 'grey'}}>{node.frontmatter.date}</p>
              </Grid>
              <p style={{marginTop: '0'}}>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
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