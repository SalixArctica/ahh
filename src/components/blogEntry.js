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
        default:
            return "grey";

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
    margin: 0 0 1rem 0;
    border-bottom: 1px solid black;
    background: slategray;
    color: white;
    border-radius: 1rem;
    padding: 2rem;
`

const AuthorDateInfo = styled.p`
    color: lightgray;
    text-align: right;
    margin: 0;
`

export default ({ article }) => (
    <Link to={'/articles/' + article.title.replace(/\s/g, '_')}>
        <BlogEntry>
            <Grid>
                <div>
                    <Title>{article.title}</Title>
                    <TypeTag type={article.type}> {article.type}</TypeTag>
                </div>
                <div>
                    <AuthorDateInfo>{article.author} - {article.date}</AuthorDateInfo>
                </div>
            </Grid>
            
        </BlogEntry>
    </Link>
)