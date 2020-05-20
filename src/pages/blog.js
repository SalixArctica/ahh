import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Container from '../components/Container'
import Banner from '../components/Banner'
import BlogEntry from '../components/blogEntry';


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Banner>
          <h1>Blog</h1>
      </Banner>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogEntry data={node}/>
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
            type
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