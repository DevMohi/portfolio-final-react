import React from 'react';
import Navbar from '../shared/Navbar';
import About from './About';
import Main from './Main';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <About />
        </div>
    );
};

export default Home;