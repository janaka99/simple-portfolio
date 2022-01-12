import React from 'react'

import styled from 'styled-components'

function Nav() {
    return (
        <Container >
            <NavContainer>

            </NavContainer>
        </Container>
    )
}

export default Nav

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    background-color: red;
    margin: 0 auto;
`

const NavContainer = styled.div`
    width:90%;
    height: 100%;
    background-color: green;
    margin: 0 auto;
`