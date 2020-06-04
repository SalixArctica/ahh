import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Container from '../components/Container'
import Grid from '../components/Grid';

export default ({ data: { strapi: { publishedArticle: article }} }) => {

  return (
    <Layout>
      <Banner>
        <h1>{article.title}</h1>
      </Banner>
      <Container>
        <Grid style={{color: 'grey'}}>
          <p>written by {article.author}</p>
          <p style={{textAlign: 'right'}}>posted on {article.date}</p>
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
  strapi {
    publishedArticle(id: $id) {
      body
      author
      id
      publish_date
      title
      type
    }
  }
}

`