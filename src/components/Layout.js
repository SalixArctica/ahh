import React from "react"
import Nav from './Nav'
import './Global.css';

export default ({ children }) => (
    <div>
        <Nav/>
        { children }
    </div>
);