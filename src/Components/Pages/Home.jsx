import React, { use } from 'react';
import "../Pages/Style/Home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AuthContext } from '../Authentications/AuthContext';
import { NavLink } from 'react-router';

// const slides = [
//   {
//     title: "Fresh Flowers Collection",
//     subtitle: "Make every moment special",
//     button: "Shop Now",
//     image: "/images/slide1.jpg",
//   },
//   {
//     title: "Wedding Flower Designs",
//     subtitle: "Elegant & Beautiful",
//     button: "Explore",
//     image: "/images/slide2.jpg",
//   },
//   {
//     title: "Birthday Special Bouquets",
//     subtitle: "Spread happiness",
//     button: "Order Today",
//     image: "/images/slide3.jpg",
//   },
// ];

const Home = () => {
  const {services} = use(AuthContext);
  console.log(services);
  return (
    <div className="home">
      <Swiper navigation={true} autoplay={true} pagination={{ clickable: true }} modules={[Navigation, Pagination, Autoplay]} className="heroSwiper">
        {services.slice(0, 4).map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay"></div>
                <div className="hero-content">
                  <h1>{slide.serviceName}</h1>
                  <p>{slide.description}</p>
                  <button><NavLink to="/services">Get Services</NavLink></button>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* <Swiper navigation={true} autoplay={true} pagination={{clickable: true}} modules={[Navigation, Pagination, Autoplay]} className="heroswiper">
          {
            services.slice(0, 4).map((service)=>(
              <SwiperSlide key={service.serviceId}>
                <div className="hero slides" style={{backgroundImage: `usrl(${service.image})`}}>
                  <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>{service.serviceName}</h1>
                        <p>{service.description}</p>
                        <button><NavLink to="/services">Get Started</NavLink></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper> */}
    </div>
  );
};

export default Home;
