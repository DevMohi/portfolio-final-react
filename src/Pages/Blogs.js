import React from 'react';
import { Link as LinkRouter } from "react-router-dom";

const Blogs = () => {

    return (
        <div>
            <h1>This is Blogs</h1>
            <LinkRouter to='/'>Go back Home</LinkRouter>
        </div>
    );
};

export default Blogs;