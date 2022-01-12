import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiX} from 'react-icons/bi'
import {motion} from 'framer-motion'
import Button from './layouts/Button'
import {navbarAnimation} from '../utils/Animation.js'


function Navbar() {



    const [navToggle, setnavToggle] = useState("false")

    const handleToggle= () =>{
        console.log(navToggle)
        if(navToggle === "true"){
            setnavToggle("false")
        }else{
            setnavToggle("true")
        }
    }



    return (
        <Container 
        variants={navbarAnimation} transition={{delay:0.2}}
        >
            <Nav>
                <LogoContainer>
                    <p>JDevP.</p>
                </LogoContainer>
                <LinkContainer show={navToggle}         
                >
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Contact me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Product</NavLink>
                        </li>
                    </ul>
                </LinkContainer>
                <NavBarButton text={"Let's talk"} link={"/homees"}/>
                {navToggle === "false" ? <HamburgerMenu  onClick={handleToggle}/> : <Xburger  onClick={handleToggle} />}

            </Nav>
            <hr />
        </Container>
    )
}

export default Navbar


const Container = styled(motion.div)`

    width: 100%;
    height: 100%;
    margin: 0 auto;
    `

const Nav = styled.div`
        height:100%;
        width:95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
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


const LinkContainer = styled(motion.div)`

    ul{
        display: flex;
        justify-content: space-between;
        li{
            list-style: none;
            margin: 15px;
        }
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        top:  60px;
        left:0;
        background-color:#000000e1;
        display: ${props =>(props.show === "false") ? "none" : ''};
        width: 100%;
        z-index: 11111;
        padding:0;
        ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
    }
    @media screen and (max-width: 440px) {
        height: calc(100vh - 60px);
        ul{
            width: 100%;
            height:100%;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;  
`

const NavBarButton = styled(Button)`


    @media screen and (max-width: 768px) {
        div{
            margin-right: 15px;
        }
    }

`

const HamburgerMenu = styled(GiHamburgerMenu)`
    display: none;
    font-size: 25px;
    @media screen and (max-width: 768px) {
        display:flex ;
    }
`

const Xburger = styled(BiX)`
    display: none;
    font-size:25px;
    @media screen and (max-width: 768px) {
        display:flex ;
    }
`