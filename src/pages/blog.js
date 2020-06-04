import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from '../components/Container'
import Banner from '../components/Banner'
import BlogEntry from '../components/blogEntry';


export default ({ data: { strapi: { publishedArticles }} }) => {

  return (
    <Layout>
      <Banner>
          <h1>Blog</h1>
      </Banner>
      <Container>
        {publishedArticles.map(article => (
          <BlogEntry article={article}/>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  strapi {
    publishedArticles {
      author
      body
      id
      title
      type
      publish_date
    }
  }
}

`