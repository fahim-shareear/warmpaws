import React from "react";
import { useNavigate } from "react-router";
import Error from "../../../public/assets/error_404.png";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-purple-600 via-pink-500 to-indigo-600" data-aos="flip-left">
      
      {/* Decorative blurred blobs */}
      <div className="absolute -top-25 -left-25 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-30 -right-30 w-80 h-80 bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>

      {/* Glass card */}
      <div className="relative z-10 flex items-center justify-center flex-col
                      bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        
        <img
          src={Error}
          alt="error page not found"
          width={400}
          height={400}
          className="rounded-xl"
        />

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 rounded-md font-bold text-white
                     bg-purple-600 hover:bg-purple-700 transition-all duration-300
                     shadow-lg hover:scale-105 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
