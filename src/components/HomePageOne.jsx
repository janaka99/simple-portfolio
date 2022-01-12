import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from './layouts/Button'
import {headerAnimation, imageAnimation} from '../utils/Animation.js'
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';


function HomePageOne() {

  const [element, controls] =useScroll()

    return (
        <Container ref={element}>
            <SubContainer>
                <TextContainer
                    variants={headerAnimation} 
                    initial={{x: -100, opacity: 0 , transition:{duration: 1}}}
                    animate={controls} 
                    transition={{duration: 0.5, delay: 0.2}} >
                    <H1Text>
                        Hi! I'M <Span>Janaka</Span>, <br /> Web Developer 
                        Based In Sri Lanka.
                    </H1Text>
                    <Ptext>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, veniam.
                    </Ptext>
                    <HomeButton>
                        <Button text={"Portfolio"} link={"/Portfolio"} />
                    </HomeButton>
                </TextContainer>
                <ImageContainer
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                >
                <Image  
                animate={{rotate:360, transition:{duration:10, yoyo: Infinity}}}
                    src="/images/incastro-b.svg" /> 

                </ImageContainer>
            </SubContainer>
        </Container>
    )
}

export default HomePageOne

const Container = styled.div`
    width:100%;
    height: 100vh;
    overflow:hidden;

`

const SubContainer = styled.div`
    width:95%;
    height:100%;
    margin: 0 auto;
    display: flex;
    position:relative;
    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
`


const TextContainer = styled(motion.div)`
    width: 60%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    @media screen and (max-width: 768px) {
        padding: 0 20px;

    }
    @media screen and (max-width: 560px) {
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 0 0;
        padding-bottom: 60px;

    }

`
const H1Text = styled.h1`

    margin-bottom: 20px;
    margin-top: 80px;
    font-size: 48px;
    width: 100%;

    @media screen and (max-width: 768px) {
        font-size: 43px;
    }
    @media screen and (max-width: 672px) {
        font-size: 30px;
    }
    @media screen and (max-width: 560px) {
        width: 100%;
    }

`
const Span = styled.span`
            background-color: #ff009deb;
        padding: 0 5px;
`


const Ptext = styled.p`

    margin-bottom: 20px;
    font-size: 14px;
    width: 90%;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
    @media screen and (max-width: 672px) {
        font-size: 12px;

    }
    @media screen and (max-width: 560px) {
        width: 80%;

    }
`

const HomeButton = styled.div`
 
`
const ImageContainer = styled(motion.div)`
    width:40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 560px) {
        position: absolute;
        width: 100%;
        z-index: -100;
        top:-60px;
        bottom: 60px;
        left: 0;
        right:0;
    }
    @media screen and (max-width:440px){
        padding:0 10px;

    }
`


const Image = styled(motion.img)`
    margin-top: 80px;
    width: 90%;
    z-index:1111;
    @media screen and (max-width: 560px) {
        opacity: 0.15;
    }

`