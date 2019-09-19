import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Container from '../components/Container'
import Banner from '../components/Banner'

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
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
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