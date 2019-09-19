import React from 'react';
import styled from 'styled-components';

class BlogForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            body: '',
            status: ''
        }
    }

    handleChange = (event) => {

        switch(event.target.name) {
            case 'title': {
                this.setState({title: event.target.value});
                break;
            }
            case 'author': {
                this.setState({author: event.target.value});
                break;
            }
            case 'body': {
                this.setState({body: event.target.value});
                break;
            }
            default: {}
        }
    }

    handleSubmit = (event) => {
        this.setState({status: 'sending...'});

        fetch('http://localhost:3000/api/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => {
            this.setState({status: res.body});
        })
        .catch(err => {
            this.setState({status: err.message});
        })
    }

    render() {
        return (
            <div>
                <p>Title</p>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                <p>Author</p>
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                <p>Body</p>
                <textarea name="body" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>status: {this.state.status}</p>
            </div>
        )
    }
}

export default BlogForm;