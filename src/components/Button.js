import styled from 'styled-components'

const Button = styled.button`
    padding: .5rem;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background: ${props => props.color ? props.color : '#2E86C1'};
    color: white;
    cursor: pointer;
    transition: all .1s linear;
    text-shadow: 1px 1px black;

    &:hover {
        box-shadow: 1px 1px 2px 2px darkgray;
    }
`
export default Button;
