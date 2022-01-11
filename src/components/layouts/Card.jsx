import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';


function Card({text, link, category}) {




    return (
        <Container >
            <SubContainer   
                whileHover={{
                    scale:1.2
                }}  >
                <ImageContainer>
                    <Image
                    src={link} />
                </ImageContainer>
                <Desc >      
                    <p>{text}</p>
                    <p>{category}</p>
                </Desc>
            </SubContainer>
        </Container>
    )
}

export default Card

const Container = styled(motion.div)`
    width: 270px;
    height: 300px;
    overflow: hidden;

`
const SubContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
`

const ImageContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;

`
const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  cursor: pointer;


`
const Desc = styled(motion.div)`
    position: absolute;
    top: 20%;
    left: 10%;

    p:nth-child(1){
        font-size: 30px;
        font-weight:600;
    }
`