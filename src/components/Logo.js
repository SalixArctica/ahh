import React from 'react'
import styled from 'styled-components'
import logoImage from '../../static/logo.png'

const Logo = styled.img`
    max-width: 700px;
    width: 50vw;

    @media only screen and (max-width: 1000px) {
        & {
            width: 70vw
        }
    }

    @media only screen and (max-width: 700px) {
        width: 80vw;
    }
`

export default () => (
    <Logo alt="AHH Logo" src={logoImage}/>
)