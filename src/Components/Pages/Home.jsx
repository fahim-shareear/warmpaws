import React, { use } from 'react';
import "../Pages/Style/Home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Catshoe from "../../assets/images/cat_shoe.webp"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AuthContext } from '../Authentications/AuthContext';
import { NavLink, Link } from 'react-router';
import Vet from "../../assets/vet.jpg"



const Home = () => {
  const {services} = use(AuthContext);
  return (
    <div className="home" data-aos="flip-left">
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
      <div className="w-full">
    <div className="lg:max-w-11/12 mx-auto  rounded-xl  bg-white/5 backdrop-blur-md">
        <div className="title text-center py-6">
            <h1 className="font-bold text-3xl text-white">Our Most Popular Services</h1>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 px-6 shadow-2xl">
            {
                services.slice(0, 6).map(slide =>
                    <div
                        key={slide.serviceId}
                        className="card bg-white/10 text-white shadow-sm backdrop-blur-md border border-white/10"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <figure>
                            <img
                                src={slide.image}
                                alt="serviceimage"
                                className="h-56 w-full object-cover opacity-90"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{slide.serviceName}</h2>
                            <p className="text-white/80">{slide.description}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-white">Price: ${slide.price}</h4>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Ratings: ⭐ {slide.rating}</h4>
                                </div>
                            </div>
                            <div className="card-actions justify-end mt-2">
                                {/* Link to the dynamic service details page */}
                                <Link to={`/services/${slide.serviceId}`}>
                                    <button className="btn cursor-pointer btn-primary btn-sm bg-white/20 border-white/20 text-white hover:bg-white/30">
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


      <div className="w-full">
          <div className="other-deals lg:max-w-11/12 mx-auto rounded-md p-2 bg-white/5 backdrop-blur-md">
                  <h1 className="font-bold text-2xl text-white">Our New Deals:</h1>
              <div className="main-card-body max-w-7xl mx-auto border border-white/20 rounded-md grid lg:grid-cols-3 gap-2">
                  <div className="card-body w-full h-full border border-white/20 flex flex-col lg:flex-row" data-aos="fade-up">
                      
                      <div className="card-img w-full lg:w-1/2 h-75">
                          <img
                              src={Catshoe}
                              alt="productimage"
                              className="w-full h-full object-cover rounded-md"
                          />
                      </div>

                      <div className="card-details w-full lg:w-1/2 flex flex-col justify-center p-6 text-white">
                          <h3 className="text-lg font-semibold text-white/80">
                              50% Off for winter on
                          </h3>
                          <h1 className="text-3xl font-bold leading-tight">
                              Shoe Protection Boot Fittings
                          </h1>
                      </div>

                  </div>

                  <div className="card-body w-full min-h-75 border border-white/20 flex flex-col lg:flex-row" data-aos="fade-up">
                      
                      <div className="card-img w-full lg:w-1/2 h-75">
                          <img
                              src={Catshoe}
                              alt="productimage"
                              className="w-full h-full object-cover rounded-md"
                          />
                      </div>

                      <div className="card-details w-full lg:w-1/2 flex flex-col justify-center p-6 text-white">
                          <h3 className="text-lg font-semibold text-white/80">
                              50% Off for winter on
                          </h3>
                          <h1 className="text-3xl font-bold leading-tight">
                              Shoe Protection Boot Fittings
                          </h1>
                      </div>

                  </div>

                  <div className="card-body w-full min-h-75 border border-white/20 flex flex-col lg:flex-row" data-aos="fade-up">
                      
                      <div className="card-img w-full lg:w-1/2 h-75">
                          <img
                              src={Catshoe}
                              alt="productimage"
                              className="w-full h-full object-cover rounded-md"
                          />
                      </div>

                      <div className="card-details w-full lg:w-1/2 flex flex-col justify-center p-6 text-white">
                          <h3 className="text-lg font-semibold text-white/80">
                              50% Off for winter on
                          </h3>
                          <h1 className="text-3xl font-bold leading-tight">
                              Shoe Protection Boot Fittings
                          </h1>
                      </div>

                  </div>
              </div>
          </div>
      </div>


{/* expert vets */}
<div className="w-full mt-16">
    <div className="lg:max-w-11/12 mx-auto  rounded-md p-4 bg-white/5 backdrop-blur-md">
        
        <div className="title text-center py-6">
            <h1 className="font-bold text-3xl text-white">Meet Our Expert Vets</h1>
            <p className="text-white/70 mt-2">Trusted professionals caring for your pets</p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-8">
            
            <div data-aos="fade-up" className="card bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <figure className="px-6 pt-6">
                    <img
                        src={Vet}
                        alt="vet"
                        className="rounded-full w-32 h-32 object-cover border border-white/30"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dr. Sarah Ahmed</h2>
                    <p className="text-white/70">Small Animal Specialist</p>
                    <div className="rating rating-sm mt-2">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="card bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <figure className="px-6 pt-6">
                    <img
                        src={Vet}
                        alt="vet"
                        className="rounded-full w-32 h-32 object-cover border border-white/30"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dr. Michael Lee</h2>
                    <p className="text-white/70">Veterinary Surgeon</p>
                    <div className="rating rating-sm mt-2">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="card bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <figure className="px-6 pt-6">
                    <img
                        src={Vet}
                        alt="vet"
                        className="rounded-full w-32 h-32 object-cover border border-white/30"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dr. Ayesha Rahman</h2>
                    <p className="text-white/70">Pet Nutrition Expert</p>
                    <div className="rating rating-sm mt-2">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="card bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <figure className="px-6 pt-6">
                    <img
                        src={Vet}
                        alt="vet"
                        className="rounded-full w-32 h-32 object-cover border border-white/30"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Dr. James Wilson</h2>
                    <p className="text-white/70">Emergency Care Vet</p>
                    <div className="rating rating-sm mt-2">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

{/* winter pet care tips */}
<div className="w-full mt-16">
    <div className="lg:max-w-11/12 mx-auto px-4">
        
        <div className="title text-center py-6">
            <h1 className="font-bold text-3xl text-white">Winter Pet Care Tips</h1>
            <p className="text-white/70 mt-2">Keep your pets safe, warm, and healthy during the cold season</p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            
            <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">❄️ Keep Them Warm</h3>
                <p className="text-white/80 leading-relaxed">
                    Provide warm bedding, cozy blankets, and limit outdoor exposure during extreme cold.
                </p>
            </div>

            <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">🥣 Adjust Their Diet</h3>
                <p className="text-white/80 leading-relaxed">
                    Pets may need extra calories in winter to maintain body heat. Consult your vet before changes.
                </p>
            </div>

            <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">🧴 Moisturize Skin & Paws</h3>
                <p className="text-white/80 leading-relaxed">
                    Cold air can dry skin and crack paws. Use pet-safe moisturizers and clean paws after walks.
                </p>
            </div>

            <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">🚿 Limit Bathing</h3>
                <p className="text-white/80 leading-relaxed">
                    Too many baths remove natural oils. Reduce frequency and always dry your pet completely.
                </p>
            </div>

            <div data-aos="fade-up" equivalent className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">🏠 Indoor Exercise</h3>
                <p className="text-white/80 leading-relaxed">
                    Cold weather reduces outdoor playtime. Use indoor games to keep your pet active and happy.
                </p>
            </div>

            <div data-aos="fade-up" className="bg-white/5 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">🩺 Regular Health Checks</h3>
                <p className="text-white/80 leading-relaxed">
                    Watch for signs of illness like shivering or lethargy and schedule regular vet checkups.
                </p>
            </div>

        </div>
    </div>
</div>



    </div>
  );
};

export default Home;
