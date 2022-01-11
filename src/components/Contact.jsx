import React from 'react'
import styled from 'styled-components'
import Button from './layouts/Button'
import { motion } from 'framer-motion';
import { headerAnimation, aboutAnimation} from '../utils/Animation.js'
import { useScroll } from './useScroll';



function Contact() {

  const [element, controls] =useScroll()


    return (
        <Container ref={element}>
            <ContactDetails 
                 variants={headerAnimation} 
                 animate={controls} 
                 transition={{duration: 0.5, delay: 0.2}}>
                    <Header>
                        <h1> <span>Contact</span> Me</h1>
                    </Header>
                <AddressDetails>
                    <Address>
                        <p>No 767, </p>
                        <p>Jump Street, Heaven, </p>
                        <p>Califonia,</p>
                        <p>United States</p>
                    </Address>
                    <Contacts>
                        <p>ContactMe@Email.com</p>
                        <p>+1189653953624</p>
                        <p></p>
                    </Contacts>
                </AddressDetails>
            </ContactDetails>
            <ContactContainer 
                 variants={aboutAnimation} 
                 animate={controls} 
                 transition={{duration: 0.5, delay: 0.2}}>
                <form >
                    <InputArea>
                        <Inputs>
                            <label htmlFor="email">Email</label >
                            <input type="text" required />
                        </Inputs>
                        <Inputs>
                            <label htmlFor="email">Name</label>
                            <input type="text"  required/>
                        </Inputs>
                    </InputArea>
                    <TextArea>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                    </TextArea>
                    <ButtonContainer>
                        <SendButton>Send</SendButton>
                    </ButtonContainer>
                </form>
            </ContactContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding:0 50px;
    max-width:1440px;
    margin: 0 auto;
    display: flex;
    margin-top: 150px;

    @media screen and (max-width:760px){
        padding: 0 20px;
        flex-direction:column;
    }

`


const ContactDetails = styled(motion.div)`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        width: 40%;
    }
    @media screen and (max-width:760px){
        margin-bottom: 50px;
        width: 100%;
    }


`
const Header = styled.div`

    h1{
        font-size: 48px;
        margin-bottom: 50px;
        text-align: center;
        span{
            color: #ff009deb;
        }
    }
`

const AddressDetails = styled.div`
    display: flex;
    justify-content:space-around;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width:760px){
        flex-direction: row;
    }
    @media screen and (max-width:440px){
        flex-direction: column;
    }
`
const Address = styled.div`
    margin-bottom: 40px;
    p{
        text-align: left;
        margin-bottom: 5px;
    }
    @media screen and (max-width:760px){
        margin-bottom: 0;
    }

    @media screen and (max-width:440px){
        margin-bottom: 40px;
        
    }
`
const Contacts = styled.div`
        p{
        text-align: left;
    }
`

const ContactContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    form{
        border: 2px solid white;
        width: 90%;
        padding: 20px;
    }

    @media screen and (max-width: 1024px) {
        width: 60%;
    }
    @media screen and (max-width:760px){
        width: 100%;

    }

`

const InputArea = styled.div`
    display: flex;
    display: flex;
    flex-wrap:wrap;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;

    label{
        padding: 5px 0;
    }

    input{
        height: 40px;
        outline: none;
        color: black;
        padding: 0 3px;
    }

`

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px ;

    width:100%;
    flex: 1;

    label{
        margin-bottom: 5px ;
    }

    textarea{
        width: 100%;
        outline: none;

        color: black;
        padding: 5px 4px;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const SendButton = styled.button`
    background-color: #1E1E1E;
    font-size: 18px;
    color: white;
    border: 1px solid #fff;
    padding: 7px 15px;
    margin-top: 20px;

    
`