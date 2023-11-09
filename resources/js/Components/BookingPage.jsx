import { Link } from '@inertiajs/react';
import React from 'react';

const BookingPage = () => {
    return (
        <section className='booking py-20'>
            <div className='cards flex px-32 gap-6 m-20 justify-center items-center'>
                <div className='about-card'>
                    <h2 className='uppercase font-bold text-xl'>
                        Quality Servicing
                    </h2>
                    <p className='text-gray-500'>
                        Diam dolor diam ipsum sit amet diam et eos erat ipsum
                    </p>
                    <Link className='more' href='#'>Read More</Link>
                </div>
                <div className='about-card'>
                    <h2 className='uppercase font-bold text-xl'>
                        Expert Workers
                    </h2>
                    <p className='text-gray-500'>
                        Diam dolor diam ipsum sit amet diam et eos erat ipsum
                    </p>
                    <Link className='more' href='#'>Read More</Link>
                </div>
                <div className='about-card'>
                    <h2 className='uppercase font-bold text-xl'>
                        Modern Equipment
                    </h2>
                    <p className='text-gray-500'>
                        Diam dolor diam ipsum sit amet diam et eos erat ipsum
                    </p>
                    <Link className='more' href='#'>Read More</Link>
                </div>
            </div>

            <div className='bg-services relative text-white'>
                <div className='flex justify-center items-center gap-10 backdrop-booking bg-black bg-opacity-70 px-32'>
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
                            <div className='flex gap-4 w-full'>
                                <input className='border-none w-1/2' type="text" name="name" id="name" placeholder="Your Name" />
                                <input className='border-none w-1/2' type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className='flex gap-4 w-full'>
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

            <div className='tags flex justify-center items-center gap-10 px-32 pt-20'>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='text-red-600 uppercase font-bold'>// Call to action //</h1>
                    <h3 className='text-4xl text-sky-950 font-bold'>
                        Have Any Pre Booking Question?
                    </h3>
                    <p className='text-gray-500'>
                        Lorem diam ea sit dolor labore. Clita et dolor erat sed est lorem sed et sit. Diam sed duo magna erat et stet clita ea magna ea sed, sit labore magna lorem tempor justo rebum dolores. Eos dolor sea erat amet et, lorem labore lorem at dolores. Stet ea ut justo et, clita et et ipsum diam.
                    </p>
                </div>
                <div className='bg-red-600 p-8 text-white w-1/3 flex flex-col justify-center items-center gap-5'>
                    <h2 className='text-2xl font-bold'>+012 345 6789</h2>
                    <Link href='#' className='border-none bg-sky-950 text-center w-full px-7 py-4 cursor-pointer uppercase font-bold'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
