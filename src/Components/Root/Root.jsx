import React from 'react';
import Navbar from '../Navigation/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navigation/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;