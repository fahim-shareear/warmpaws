import React, { use, useState } from 'react';
import "./Css/User.css";
import { Link, useLocation, useNavigate } from 'react-router';    
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Authentications/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const [eye, setEye] = useState(false);
    const {signInUser, googlePopUp, loading} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Log in data", email, password);

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

        if(!regex.test(password)){
            toast.error("Your passowrd must contain one uppercase, one lowercase letter and it must be 6 character long");
            return;
        }


        signInUser(email, password)
            .then((result) =>{
                const user = result.user;
                toast.success(`${user.displayName.toUpperCase()} Has logged In Successfully`);
                e.target.reset();
                loading
                const redirectPath = location.state?.from?.pathname || "/"
                navigate(redirectPath, {replace: true});
            })
            .catch((error) =>{
                toast.error(error.message);
                return
            })
    };

    const googleSignIn = e =>{
        e.preventDefault();
        googlePopUp()
            .then(()=>{
                toast.success("User Logged In");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath, { replace: true });

            })
            .catch((error)=>{
                toast.error(error.message);
            });
    };



    const handleEye = e =>{
        e.preventDefault();
        setEye(!eye)

        setTimeout(()=>{
            setEye(false);
        }, 3000);
    };

    return (
        <div className="flex items-center justify-center w-full h-screen log" data-aos="flip-right">
            <form className="form" onSubmit={handleLogIn} data-aos="zoom-in-up">
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

                        <p>If you are not registered Please <Link to="/register" className="font-bold text-white text-[15px] underline">Register</Link></p>
                        <p><Link to="/passchange" className="font-bold text-white text-[15px] underline">Forgot Password?</Link></p>

                        <button className="btn btn-primary mt-4 text-[18px]" type='submit'>Log In</button>

                </fieldset>
                <button className="btn bg-white text-black border-[#e5e5e5] w-full" onClick={googleSignIn}>
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;