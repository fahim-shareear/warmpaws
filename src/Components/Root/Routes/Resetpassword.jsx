import React, { use } from 'react';
import "./pass.css";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Authentications/AuthContext';

const Resetpassword = () => {
    const {loading} = use(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;

        sendPasswordResetEmail(auth, email)
            .then(()=>{
                toast.success("Passowrd reset mail has been sent");
                e.target.reset();

                setTimeout(()=>{
                    loading;
                    navigate("/login");
                }, 5000);
            })
            .catch((error)=>{
                toast.error(error.message);
                return;
            })
    }

    return (
        <div className="flex items-center border-2 main h-screen" data-aos="flip-right">
            <form className="backdrop-blur-md mx-auto border-2 border-white rounded-xl p-2" onSubmit={handleSubmit} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <fieldset className="fieldset bg-transparent rounded-box w-xs border-white border p-4">
                    <legend className="fieldset-legend">Reset Password</legend>

                    <label className="label font-bold text-white">Email</label>
                    <input type="email" className="input bg-transparent text-white font-bold" placeholder="Email" name='email'/>

                    <button className="btn bg-primary cursor-pointer mt-4 border-none">Reset Passoword</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Resetpassword;