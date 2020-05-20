import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid'
import { Link } from 'gatsby';

const colorFromType = (type) => {
    switch(type) {
        case "Academic":
            return "lightblue";
        case "Opinion":
            return "Orange";
        case "Informative":
            return "lightgreen";
    }
}

const TypeTag = styled.p`
    margin: 1rem auto;
    color: ${props => colorFromType(props.type)};
    display: inline;
`

const Title = styled.h3`
    display: inline;
`

const BlogEntry = styled.div`
    margin: 0 0 3rem 0;
    border-bottom: 1px solid black;
`

const AuthorDateInfo = styled.p`
    color: grey;
    text-align: right;
    margin: 0;
`

  

export default ({data}) => (
    <Link to={data.fields.slug}>
        <BlogEntry>
            <Grid>
                <div>
                    <Title>{data.frontmatter.title}</Title>
                    <TypeTag type={data.frontmatter.type}> {data.frontmatter.type}</TypeTag>
                </div>
                <div>
                    <AuthorDateInfo>{data.frontmatter.author} - {data.frontmatter.date}</AuthorDateInfo>
                </div>
            </Grid>
            
        </BlogEntry>
    </Link>
)