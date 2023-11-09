import { Link } from '@inertiajs/react';
import React from 'react';
import about_img from "../../../public/assets/img/about.jpg"
import technicians_1 from "../../../public/assets/img/team-1.jpg"
import technicians_2 from "../../../public/assets/img/team-2.jpg"
import technicians_3 from "../../../public/assets/img/team-3.jpg"
import technicians_4 from "../../../public/assets/img/team-4.jpg"

const AboutPage = () => {

    const technicians = [
        {
            image: technicians_1,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_2,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_3,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_4,
            name: "Full Name",
            designation: "Designation",
        },
    ]

    return (
        <section className='about py-20'>
            <div className='flex px-32 gap-6 m-20 justify-center items-center'>
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

            <div className='flex gap-14 px-32 justify-center'>
                <div className='left relative w-1/2'>
                    <img loading='lazy' src={about_img} alt="about-img" />
                    <div className='absolute -top-5 -right-5 text-center p-8 w-64 bg-black bg-opacity-10 font-bold text-white text-2xl'>
                        <span className='text-5xl'>15</span>  Years Experience
                    </div>
                </div>
                <div className='right flex flex-col gap-10 justify-center w-1/2'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-red-600 uppercase font-bold'>// About Us //</h1>
                        <p className='text-4xl text-sky-950 font-bold'>
                            <span className='text-red-600'>CarServ</span> Is The Best Place For Your Auto Care
                        </p>
                        <p className='text-gray-500'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='bg-gray-200 text-sky-950 font-bold p-3'>
                                01
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-sky-950 font-bold'>
                                    Professional & Expert
                                </h3>
                                <p className='text-gray-500'>
                                    Diam dolor diam ipsum sit amet diam et eos
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='bg-gray-200 text-sky-950 font-bold p-3'>
                                02
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-sky-950 font-bold'>
                                    Quality Servicing Center
                                </h3>
                                <p className='text-gray-500'>
                                    Diam dolor diam ipsum sit amet diam et eos
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='bg-gray-200 text-sky-950 font-bold p-3'>
                                03
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-sky-950 font-bold'>
                                    Awards Winning Workers
                                </h3>
                                <p className='text-gray-500'>
                                    Diam dolor diam ipsum sit amet diam et eos
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link className='bg-red-600 text-center text-white px-7 py-4 cursor-pointer uppercase hover:bg-red-700 font-bold w-44' href='#'>Read More</Link>
                </div>
            </div>

            <div className='sactistics relative my-20'>
                <div className='w-full h-full absolute top-0 text-white bg-black bg-opacity-60 flex justify-center items-center gap-16'>
                    <div className='sactistic flex flex-col gap-1 items-center text-white p-5'>
                        <h4 className='font-bold text-3xl'>
                            1234
                        </h4>
                        <p className=' text-lg'>
                            Years Experience
                        </p>
                    </div>
                    <div className='sactistic flex flex-col gap-1 items-center text-white p-5'>
                        <h4 className='font-bold text-3xl'>
                            1234
                        </h4>
                        <p className=' text-lg'>
                            Expert Technicians
                        </p>
                    </div>
                    <div className='sactistic flex flex-col gap-1 items-center text-white p-5'>
                        <h4 className='font-bold text-3xl'>
                            1234
                        </h4>
                        <p className=' text-lg'>
                            Satisfied Clients
                        </p>
                    </div>
                    <div className='sactistic flex flex-col gap-1 items-center text-white p-5'>
                        <h4 className='font-bold text-3xl'>
                            1234
                        </h4>
                        <p className=' text-lg'>
                            Compleate Projects
                        </p>
                    </div>
                </div>
            </div>

            <div className='technicians px-32 pb-20'>
                <div className='flex flex-col justify-center items-center pb-14'>
                    <h1 className='text-red-600 uppercase font-bold'>
                    // Our Technicians //
                    </h1>
                    <p className='text-4xl text-sky-950 font-bold'>
                        Our Expert Technicians
                    </p>
                </div>
                <div className='flex gap-7 justify-center items-center'>
                    {
                        technicians.map((technician, index) => (
                            <div key={index} className='technician bg-gray-200 text-center'>
                                <div className='relative'>
                                    <div className='bg-red-600 w-full h-full d-none absolute top-0 left-0'></div>
                                    <img loading='lazy' src={technician.image} alt="technicians-img" />
                                </div>
                                <div className='p-4'>
                                    <h5 className='text-xl text-sky-950 font-bold'>{technician.name}</h5>
                                    <p className='text-gray-400'>{technician.designation}</p>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
