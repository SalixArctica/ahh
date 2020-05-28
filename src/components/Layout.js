import React from "react"
import Nav from './Nav'
import './Global.css';

export default ({ children }) => (
    <>
        <Nav/>
        { children }
    </>
);