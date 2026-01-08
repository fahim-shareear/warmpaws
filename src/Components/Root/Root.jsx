import React from 'react';
import Navbar from '../Navigation/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navigation/Footer';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-700 via-indigo-700 to-pink-600 text-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;
