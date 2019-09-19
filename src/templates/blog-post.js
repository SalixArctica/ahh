import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from '../components/Banner'
import Container from '../components/Container'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Banner>
        <h1>{post.frontmatter.title}</h1>
      </Banner>
      <Container>
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
      }
    }
  }
`