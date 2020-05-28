import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import Container from '../components/Container'
import styled from 'styled-components';

const StyledInput = styled.input`
    display: block;
    font-size: 1rem;
`

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 1rem;
`

class Login extends React.Component {
  state = {
    username: ``,
    password: ``
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }

    return (
      <Container>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/admin/articles`)
          }}
          style={{marginLeft: '1rem'}}
        >
          <StyledLabel>
            Username
            <StyledInput type="text" name="username" onChange={this.handleUpdate} />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </StyledLabel>
          <input type="submit" value="Log In" />
        </form>
      </Container>
    )
  }
}

export default Login