import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Authentications/AuthContext';
import { toast } from 'react-toastify';
import { FaHouseUser } from 'react-icons/fa';
import "../Pages/Style/Home.css";
import Logo from "../../../public/assets/logo.gif"

const Navbar = () => {
    const {user, signOutUser, loading} = use(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOutUser()
            .then(() =>{
                toast.success("User Signed Out");
                loading
                navigate("/login");
            })
            .catch((error) =>{
                toast.error(error.message);
                return;
            })
    }

    const profileRoute = () =>{
        loading;
        navigate("/profile");
    }

    const menu = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
    </>
    return (
        <div className="navbar shadow-sm sticky top-0 bg-transparent! backdrop-blur-lg z-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-transparent rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-[15px]">
                    {menu}
                </ul>
                </div>
                
                <Link to="/">
                    <div className="flex items-center">
                        <img src={Logo} alt="" width={40} height={40} className="rounded-full"/>
                        <p className="btn btn-ghost text-xl text-wrap hidden lg:flex">WarmPaws – Pet Care in Winter</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-[17px]">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <div className="border-2 mr-4 text-center p-1 rounded-full relative group" onClick={profileRoute}>
                        <FaHouseUser className="font-bold text-4xl cursor-pointer" />

                        <div className="absolute top-12 right-0 w-40 p-2 border-2 backdrop-blur-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-bold text-white">{user.displayName}</h3>
                        </div>
                        </div>
                    ) : (
                        <button className="btn mr-4 cursor-pointer">
                        <Link to="/register">Register</Link>
                        </button>
                    )
                    }

                {
                    user ? <button className="btn cursor-pointer"><Link to="/login" onClick={handleSignOut}>Sign Out</Link></button> :  <button className="btn cursor-pointer"><Link to="/login">Log In</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;