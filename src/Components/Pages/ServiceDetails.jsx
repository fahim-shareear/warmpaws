import React, { use, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../Authentications/AuthContext';
import { toast } from 'react-hot-toast';
import "../Pages/Style/Home.css";

const ServiceDetails = () => {
    const { id } = useParams();
    const { services, user } = use(AuthContext); // assuming AuthContext provides `user`
    const navigate = useNavigate();

    const service = services.find(s => s.serviceId === parseInt(id));

    // Form state
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
    });

    if (!service) {
        return <p className="text-center text-white mt-16">Service not found</p>;
    }

    // Handle input changes
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Service booked successfully for ${formData.name}!`);

        // Clear form
        setFormData({ name: user?.name || '', email: user?.email || '' });

        // Redirect to Services page after 1.5 seconds
        setTimeout(() => {
            navigate('/services');
        }, 1500);
    };

    return (
        <div className="service-details h-screen p-15" data-aos="flip-left">
            <div className="w-full pb-16">
            <div className="lg:max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-xl">
                
                {/* Service Image */}
                <img
                    src={service.image}
                    alt="service"
                    className="w-full h-80 object-cover rounded-md mb-6 opacity-90"
                />

                {/* Service Info */}
                <h1 className="text-3xl font-bold mb-2">{service.serviceName}</h1>
                <p className="text-white/80 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                    <p><strong>Provider:</strong> {service.providerName}</p>
                    <p><strong>Email:</strong> {service.providerEmail}</p>
                    <p><strong>Category:</strong> {service.category}</p>
                    <p><strong>Rating:</strong> ⭐ {service.rating}</p>
                    <p><strong>Price:</strong> ${service.price}</p>
                    <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
                </div>

                {/* Booking Form */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Book Service</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:max-w-md">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="input input-bordered w-full text-base sm:input-sm bg-white/10 text-white border-white/30 placeholder-white/60"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="input input-bordered w-full text-base sm:input-sm bg-white/10 text-white border-white/30 placeholder-white/60"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-full sm:w-auto btn-sm bg-white/20 border-white/20 text-white hover:bg-white/30"
                        >
                            Book Now
                        </button>
                    </form>
                </div>

            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;
