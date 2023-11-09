import { Link } from '@inertiajs/react';
import Service_1 from "../../../public/assets/img/service-1.jpg"
import React from 'react';

const ServicesPage = () => {
    return (
        <section className='services'>
            <div className='flex px-20 flex-col justify-center items-center py-20'>
                <h1 className='text-red-600 uppercase font-bold'>
                // Our Services //
                </h1>
                <p className='text-4xl text-sky-950 font-bold'>
                    Explore Our Services
                </p>
            </div>

            <div className='service_1 flex px-20 gap-5 justify-center mb-20'>
                <div className='left w-1/3 flex flex-col gap-5'>
                    <div className='cursor-pointer bg-red-600 text-white p-6'>
                        <h5 className='text-2xl font-bold'>Diagnostic Test</h5>
                    </div>
                    <div className='cursor-pointer bg-gray-200 text-sky-950 p-6'>
                        <h5 className='text-2xl font-bold'>Diagnostic Test</h5>
                    </div>
                    <div className='cursor-pointer bg-gray-200 text-sky-950 p-6'>
                        <h5 className='text-2xl font-bold'>Diagnostic Test</h5>
                    </div>
                    <div className='cursor-pointer bg-gray-200 text-sky-950 p-6'>
                        <h5 className='text-2xl font-bold'>Diagnostic Test</h5>
                    </div>
                </div>
                <div className='center w-1/3'>
                    <img loading='lazy' className='h-400 w-96' src={Service_1} alt="service-1-img" />
                </div>
                <div className='right w-1/3'>
                    <div className='flex flex-col gap-5'>
                        <h5 className='text-2xl font-bold text-sky-950'>
                            15 Years Of Experience In Auto Servicing
                        </h5>
                        <p className='text-gray-500'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                    <ul className='text-gray-500 my-8 flex flex-col justify-center gap-5'>
                        <li>Quality Servicing</li>
                        <li>Expert Workers</li>
                        <li>Modern Equipment</li>
                    </ul>
                    <div>
                        <Link className='bg-red-600 text-center text-white px-7 py-4 cursor-pointer uppercase hover:bg-red-700 font-bold w-44' href='#'>Read More</Link>
                    </div>
                </div>
            </div>

            <div className='bg-services relative text-white z-0 my-20'>
                <div className='backdrop-services flex justify-center items-center gap-10 bg-black bg-opacity-70 px-32'>
                    <div className='left w-1/2 flex flex-col gap-10'>
                        <h2 className='text-4xl font-bold'>
                            Certified and Award Winning Car Repair Service Provider
                        </h2>
                        <p>
                            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
                        </p>
                    </div>
                    <div className='right w-1/2 p-10 bg-red-600'>
                        <h2 className='text-4xl text-center font-bold py-5'>Book For A Service</h2>
                        <form className='flex flex-col gap-4' action="#">
                            <div className='flex gap-4 w-full inputs'>
                                <input className='border-none w-1/2' type="text" name="name" id="name" placeholder="Your Name" />
                                <input className='border-none w-1/2' type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className='flex gap-4 w-full inputs'>
                                <select className='border-none w-1/2 text-gray-500' name="seervice" id="service">
                                    <option selected>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 2</option>
                                    <option value="3">Service 3</option>
                                </select>
                                <input className='border-none w-1/2' type="text" name="serviceDate" id="serviceDate" placeholder='Service Date' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <textarea className='border-none' pla name="request" placeholder='Special Request' id="request" cols="30" rows="2"></textarea>
                                <input className='border-none bg-sky-950 text-center text-white px-7 py-4 cursor-pointer uppercase font-bold' type="submit" value="Book Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='relative z-10 my-5 flex flex-col justify-center items-center py-20'>
                <h1 className='text-red-600 uppercase font-bold'>
                // Testimonial //
                </h1>
                <p className='text-4xl text-sky-950 font-bold'>
                    Our Clients Say!
                </p>
            </div>
        </section>
    );
};

export default ServicesPage;
