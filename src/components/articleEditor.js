// import react, react-markdown-editor-lite, and a markdown parser you like
import React, { useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import Container from './Container'
import Grid from './Grid'
import { StyledInput, StyledLabel, StyledSelect } from './InputElems'

// import style manually
import 'react-markdown-editor-lite/lib/index.css';
 
// Initialize a markdown parser
const mdParser = new MarkdownIt();

function handleEditorChange({html, text}) {

}

export default (props) => {

    const [ article, setArticle ] = useState();

    useEffect(() => {
        let params = (new URL(document.location)).searchParams;
        fetch('http://localhost:1337/drafts/' + params.get('id'))
        .then(res => res.json())
        .then(data => {
            setArticle(data);
        })
        .catch(console.error);
    })

    return (
        <Container>
            <Grid>
                <Grid col='3'>
                    <StyledLabel>
                        Title
                        <StyledInput value={article ? article.title : ''}/>
                    </StyledLabel>
                    <StyledLabel>
                        Author
                        <StyledInput value={article ? article.author : ''}/>
                    </StyledLabel>
                    <StyledLabel>
                        Type
                        <StyledSelect>
                            <option value="Informative">Informative</option>
                            <option value="Opinion">Opinion</option>
                            <option value="Academic">Academic</option>
                        </StyledSelect>
                    </StyledLabel>
                </Grid>
            </Grid>
            {typeof(window) !== undefined ? (
                <MdEditor
                    value={article ? article.body : ''}
                    style={{ height: "500px" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                />
            ): null}
        </Container>
    )
}