import React from 'react';
import Navbar from '../shared/Navbar';
import About from './About';
import Main from './Main';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <About />
            <Skills />
        </div>
    );
};

export default Home;