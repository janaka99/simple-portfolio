import React from 'react'
import styled from 'styled-components'

function Logo() {
    return (
        <Container>
                <LogoContainer>
                    <p>JDevP.</p>
                </LogoContainer>
        </Container>
    )
}

export default Logo

const Container = styled.div`
    
`
const LogoContainer = styled.div`
    border: none;
    background-color: #fff;
    padding: 2px 5px;
    p{
        font-size: 30px;
        font-weight:800;
        cursor: pointer;
        color:#000000e1;
    }


`