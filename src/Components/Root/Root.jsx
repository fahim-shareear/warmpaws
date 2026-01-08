import React from 'react';
import Navbar from '../Navigation/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navigation/Footer';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;