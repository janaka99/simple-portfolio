import React from 'react'
import styled from 'styled-components'
import Button from './layouts/Button'
import { motion } from 'framer-motion'
import {AboutImageAnimation, aboutAnimation} from '../utils/Animation.js'
import { useScroll } from './useScroll';

function AboutMe() {

    const [element, controls] =useScroll()

    return (
        <Container ref={element}>
            <ImageContainer>
                <motion.div
                    variants={AboutImageAnimation}
                        animate={controls}
                        transition={{duration:1, delay:0.2}}>
                    <div>
                    <Image

                    src="/images/profile.jpg" />
                    </div>
                </motion.div>
            </ImageContainer>
            <TextContainer
                    variants={aboutAnimation}
                    animate={controls}
                    transition={{duration:1, delay:0.2}}
            >
                <h1> <span>Who</span> Am I</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt eaque dolore et veniam repellendus eligendi quaerat quam architecto iste reiciendis aliquid labore, autem, molestiae inventore esse nobis numquam? Tempora nostrum velit fugit praesentium recusandae minus ullam eligendi officia beatae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /><br /> Ex incidunt eaque dolore et veniam repellendus eligendi quaerat quam architecto iste reiciendis aliquid labore, autem, molestiae inventore esse nobis numquam? Tempora nostrum velit fugit praesentium recusandae minus ullam eligendi officia beataeLorem. </p>
                <AboutButton  />
                    <Button text={"Resume"} link={'/'} />
                <AboutButton />
            </TextContainer>
        </Container>
    )
}

export default AboutMe

const Container = styled.div`
    height: 100%;
    max-width: 1440px;
    width:100%;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 878px) {
        flex-direction: column;
    }

    @media screen and (max-width:760px){
        padding: 0 20px;
    }


`
const ImageContainer = styled.div`
    width: 40%;
    padding-right: 20px;
    div:nth-child(1){
        width:100%;
        border: 2px solid #fff;
        border-radius: 50%;
        border-color: #ff009d;

        div{
            /* border: 2px solid #4F3DFF; */
            border-radius: 50%;
            padding: 10px;
            z-index:100;
        }
    }
    @media screen and (max-width: 878px) {
        width: 60%;
    }
    @media screen and (max-width: 560px) {
        width: 80%;
    }
`
const Image = styled(motion.img)`
    width: 100%;
    border-radius: 50%;
    border:2px solid #000000e1;
`
const TextContainer = styled(motion.div)`
    width: 60%;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    /* justify-content: space-around; */
    h1{
        font-size:48px;
        margin-bottom: 50px;
        span{
            color: #ff009deb;
        }
    }

    p{
        font-size: 19px;
        font-weight:300;
        @media screen and (max-width: 878px) {
        font-size: 16px;
        }
    }
    @media screen and (max-width: 760px) {
        width: 100%;
    }
    @media screen and (max-width:440px){
        padding: 50px 10px;
    }
`
const AboutButton = styled.div`
    margin: 20px ;
`