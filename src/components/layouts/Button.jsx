import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

function Button({text, link }) {
    return (
        <ContactContainer>
        <div>
            <NavLink to={link}>{text}</NavLink>
        </div>
        
        </ContactContainer>
    )
}

export default Button

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    
    div{
        border: 1px solid #fff;
        padding: 6px 13px;
        cursor: pointer;

    }

`
const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: white;
`