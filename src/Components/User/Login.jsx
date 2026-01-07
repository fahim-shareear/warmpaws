import React, { useState } from 'react';
import "./Css/User.css";
import { Link } from 'react-router';    
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [eye, setEye] = useState(false);

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Log in data", email, password);
    }


    const handleEye = e =>{
        e.preventDefault();
        setEye(!eye)

        setTimeout(()=>{
            setEye(false);
        }, 3000);
    }

    return (
        <div className="flex items-center justify-center w-full h-screen log">
            <form className="form" onSubmit={handleLogIn}>
                <fieldset className="fieldset border-base-300 rounded-box w-xs">
                        <legend className="fieldset-legend text-xl">Log In</legend>

                        <label className="label font-bold text-white">Email</label>
                        <input type="email" className="input bg-transparent" placeholder="Email" name='email'/>

                        <div className="relative">
                            <label className="label font-bold text-white mb-1">Password</label>
                            <input type={eye ? "text" : "password"} className="input bg-transparent" placeholder="Password" name='password'/>
                            <button onClick={handleEye} className="absolute text-[18px] cursor-pointer top-8 right-5">
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