import React from 'react';
import Navbar from '../shared/Navbar';
import About from './About';
import Contact from './Contact';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;