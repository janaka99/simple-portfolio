
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar';
import  styled from 'styled-components';
import Home from './components/pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      < Router>
        <Navbar />

        <Home />

        <Footer />
      </Router>

    </Container>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height: 60px;

`

// const Div = styled.div`
//   height:60px;
//   background-color: red;
//   max-width: 1440px;
//   margin: 0 50px;
// `