import React from 'react';
import car_img from "../../../public/assets/img/carousel-1.png"
import { Link } from '@inertiajs/react';

const Header = () => {
    return (
        <header className='header bg-header font-bold absolute top-0 z-0'>
            <div className='header-content px-32 text-white bg-black bg-opacity-50 flex justify-center items-center gap-10'>
                <div className='flex flex-col gap-10'>
                    <h1>// CAR SERVICING //</h1>
                    <p className='text-5xl'>Qualified Car Repair Service Center</p>
                    <Link className='bg-red-600 w-44 text-white py-4 cursor-pointer px-8 uppercase hover:bg-red-700' href='#'>Learn More</Link>
                </div>
                <div>
                    <img loading='lazy' src={car_img} alt="car-img" />
                </div>
            </div>
        </header>
    );
};

export default Header;
