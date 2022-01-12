import React from 'react'
import  styled  from 'styled-components';
import HomePageOne from './../HomePageOne';
import MyWork from './../MyWork';
import AboutMe from './../AboutMe';
import Contact from './../Contact';


function Home() {
    return (
        <Container>
            <HomePageOne />
            <AboutMe />
            <MyWork />
            <Contact />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    overflow-x: hidden;
`

