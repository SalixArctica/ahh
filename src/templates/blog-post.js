import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Container from '../components/Container'
import Grid from '../components/Grid';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Banner>
        <h1>{post.frontmatter.title}</h1>
      </Banner>
      <Container>
        <Grid style={{color: 'grey'}}>
          <p>written by {post.frontmatter.author}</p>
          <p style={{textAlign: 'right'}}>posted on {post.frontmatter.date}</p>
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`