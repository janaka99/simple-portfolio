import React from 'react'
import styled from 'styled-components'
import Card from './layouts/Card'
import {headerAnimation, imageAnimation, worktitleAnimation} from '../utils/Animation.js'
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';



function MyWork() {
  const [element, controls] =useScroll()

    return (
        <Container ref={element}>
            <Header
                 variants={worktitleAnimation} 
                 animate={controls} 
                 transition={{duration: 0.5, delay: 0.2}}>           
            
                <h1> <span>My</span> Work</h1>
            </Header>
            <MyworkDesc
                 variants={worktitleAnimation} 
                 animate={controls} 
                 transition={{duration: 0.5, delay: 0.2}}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita doloremque quo voluptatum, animi laudantium accusamus necessitatibus perspiciatis voluptatem inventore.</p>
            </MyworkDesc>
            <MyWorkSample
                 variants={worktitleAnimation} 
                 animate={controls} 
                 transition={{duration: 0.5, delay: 0.5}}>
                <Card text={"WebDeveloper"} link={'/images/work (1).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work (2).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work (3).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work (4).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work (5).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work (6).jpg'} category={"Branding"}/>
                <Card text={"WebDeveloper"} link={'/images/work.jpg'} category={"Branding"}/>

            </MyWorkSample>
        </Container>
    )
}

export default MyWork

const Container = styled.div`
    max-width:1440px;
    height: 100%;
    width:100%;
    padding:0 50px;
    display: flex;
    margin:0 auto;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    @media screen and (max-width: 760px) {
        padding:0 20px;
    }
    @media screen and (max-width:440px){
        padding:0 10px;
        margin-top: 0;

    }
`
const Header = styled(motion.div)`
    
    h1{
        font-size: 48px;
        margin-bottom: 50px;
        span{
            color: #ff009deb;
        }
    }
`
const MyworkDesc = styled(motion.div)`
    margin-bottom: 50px;
    p{
        font-size: 19px;
        text-align:center;
    }
`
const MyWorkSample = styled(motion.div)`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 20px;
    height: fit-content;
`