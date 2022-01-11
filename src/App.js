
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import HomePageOne from './components/HomePageOne';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import {headerAnimation, ImageAnimation} from './utils/Animation'
import { useScroll } from './components/useScroll';

function App() {

  const [element, controls] =useScroll()

  return (
    <motion.div initial="hidden" animate="show" style={{maxWidth: "100vw"}}>
      <Router>

        <Navbar />
        <HomePageOne />
        <AboutMe />
        <MyWork />
        <Contact />
        <Footer />
        {/* <Routes>
          <Route path='/' element={<HomePageOne />} />
        </Routes> */}
      </Router>
    </motion.div>
  );
}

export default App;
