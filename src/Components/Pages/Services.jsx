import React, { use } from 'react';
import { AuthContext } from '../Authentications/AuthContext';
import { Link } from 'react-router';
import "../Pages/Style/Home.css";

const Services = () => {
    const { services } = use(AuthContext);

    return (
        <div className="h-screen">
            <div className="w-full service" data-aos="flip-left">
            <div className="lg:max-w-11/12 mx-auto px-4">
                
                <div className="title text-center py-6">
                    <h1 className="font-bold text-3xl text-white">Our Services</h1>
                    <p className="text-white/70 mt-2">Explore all available pet care services</p>
                </div>

                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                    {
                        services.map(service =>
                            <div
                                key={service.serviceId}
                                data-aos="fade-up"
                                className="card bg-white/10 border border-white/20 text-white backdrop-blur-md"
                            >
                                <figure>
                                    <img
                                        src={service.image}
                                        alt="service"
                                        className="h-56 w-full object-cover"
                                    />
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title">
                                        {service.serviceName}
                                    </h2>

                                    <p className="text-white/70">
                                        {service.description.slice(0, 80)}...
                                    </p>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm">
                                            ⭐ {service.rating}
                                        </span>
                                        <span className="text-sm">
                                            ${service.price}
                                        </span>
                                    </div>

                                    <div className="card-actions justify-end mt-4">
                                        <Link to={`/services/${service.serviceId}`}>
                                            <button className="btn btn-sm bg-white/20 text-white border border-white/30 hover:bg-white/30">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
        </div>
    );
};

export default Services;
