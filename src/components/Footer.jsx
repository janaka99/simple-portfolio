import React from 'react'
import styled from 'styled-components'
import Logo from './layouts/Logo'

function Footer() {
    return (
        <Container>
            <hr />
            <FooterDetails>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <h3>Copyright © 2021 Jdev.com</h3>
            </FooterDetails>
        </Container>
    )
}

export default Footer

const Container =styled.div`
    height: 200px;
    padding-top: 50px;
    width:100%;
    
`
const FooterDetails =styled.div`
    display: flex;
    height: 100%;
    max-width: 1440px;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 470px){
        flex-direction: column;
        justify-content: space-around;
    }

    h3{
        @media screen and (max-width: 470px){
            text-align: center;
    }
    }
`
const LogoContainer =styled.div`
    width: fit-content;
`
