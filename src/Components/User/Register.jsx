import React, { use, useState } from 'react';
import "./Css/User.css";
import { Link, useNavigate,  } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Authentications/AuthContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [eye, setEye] = useState(false);
    const {createUser, loading, googlePopUp} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (e) =>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.img.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

        if(!regex.test(password)){
            toast.error("Your passowrd must contain one uppercase, one lowercase letter and it must be 6 character long");
            return;
        }

        createUser(email, password)
            .then(async result => {
                const user = result.user;
                return await updateProfile(user, {
                    displayName: username, photoURL: photo
                })
                .then(()=>{
                    toast.success("Registration Successful")
                    e.target.reset();
                    loading;
                    navigate("/");
                    // console.log(user);
                })
                .catch(error =>
                    {toast.error(error.message);});
            })
            .catch(error =>{
                toast.error(error.message);
            });

        console.log("form data", email, username, password, photo);
    }

    const registerWithGoogle = () =>{
        googlePopUp()
            .then((result)=>{
                const user = result.user
                // console.log(user);
                return updateProfile(user, {
                    displayName: user.displayName, email: user.email, photoURL: user.photoURL
                }).then(()=>{
                    toast.success("Registration Successful");
                    navigate("/")
                }).catch((error)=>{
                    toast.error(error.message);
                    return
                })
                        
            })
    }

    const handleEye = (e) =>{
        e.preventDefault();
        setEye(!eye);
    }



    return (
        <div className="flex items-center justify-center w-full h-screen reg">
            <form className="form" onSubmit={handleRegistration}>
                <fieldset className="fieldset border-base-300 rounded-box w-xs">
                        <legend className="fieldset-legend text-xl">Register</legend>

                        <label className="label font-bold text-white">Your Name</label>
                        <input type="text" className="input bg-transparent" placeholder="Your Name" name='username' required/>

                        <label className="label font-bold text-white">Image</label>
                        <input type="text" className="input bg-transparent" placeholder="Image Link" name='img'/>

                        <label className="label font-bold text-white">Email</label>
                        <input type="email" className="input bg-transparent" placeholder="Email" name='email' required/>

                        <div className="relative">
                            <label className="label font-bold text-white mb-2">Password</label>
                            <input type={eye ? "text" : "password"} className="input bg-transparent" placeholder="Password" name='password' required/>
                            <button onClick={handleEye} className="absolute text-[18px] top-9 right-5 cursor-pointer">
                                {
                                    eye ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>

                        <p>If you already Register Please <Link to="/login" className="font-bold text-white text-[15px] underline">Log In</Link></p>

                        <button className="btn btn-primary mt-4 text-[18px]" type='submit'>Register</button>
                </fieldset>
                <button className="btn bg-white text-black border-[#e5e5e5] w-full" onClick={registerWithGoogle}>
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                </button>
            </form>
        </div>
    );
};

export default Register;