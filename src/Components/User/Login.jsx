import React, { useState } from 'react';
import "./Css/User.css";
import { Link } from 'react-router';    
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [eye, setEye] = useState(false);


    const handleEye = e =>{
        e.preventDefault();
        setEye(!eye);
    }
    return (
        <div className="flex items-center justify-center w-full h-screen log">
            <form className="form">
                <fieldset className="fieldset border-base-300 rounded-box w-xs">
                        <legend className="fieldset-legend text-xl">Log In</legend>

                        <label className="label font-bold text-white">Email</label>
                        <input type="email" className="input bg-transparent" placeholder="Email" name='email'/>

                        <div className="relative">
                            <label className="label font-bold text-white">Password</label>
                            <input type={eye ? "text" : "password"} className="input bg-transparent" placeholder="Password" name='password'/>
                            <button onClick={handleEye} className="absolute text-[18px] cursor-pointer top-7 right-5">
                                {
                                    eye ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>

                        <p>If you already Register Please <Link to="/register" className="font-bold text-white text-[15px] underline">Register</Link></p>

                        <button className="btn btn-primary mt-4 text-[18px]" type='submit'>Log In</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;