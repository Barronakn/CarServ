import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Nav = () => {
    const { url } = usePage();

    const menu = ["/", "/about", "/services", "#", "/contact",]

    return (
        <nav className='bg-white navbar flex justify-between items-center px-20 relative z-20'>
            <div className='logo'>
                <Link className='text-red-600 text-3xl font-semibold' href='/'>CarServ</Link>
            </div>
            <ul className='flex gap-16 items-center'>
                <li>
                    <Link className={url === menu[0] ? "text-red-600 uppercase font-bold text-sm" : "uppercase font-bold text-sm hover:text-red-600"} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={url === menu[1] ? "text-red-600 uppercase font-bold text-sm" : "uppercase font-bold text-sm hover:text-red-600"} href='/about'>About</Link>
                </li>
                <li>
                    <Link className={url === menu[2] ? "text-red-600 uppercase font-bold text-sm" : "uppercase font-bold text-sm hover:text-red-600"} href='/services'>Services</Link>
                </li>
                <li className='relative pages'>
                    <Link className={url === menu[3] ? "text-red-600 uppercase font-bold text-sm" : "uppercase font-bold text-sm hover:text-red-600"} href='#'>
                        Pages
                    </Link>
                    <ul className='bg-white w-44 pt-6 absolute z-10 left-0 d-none sous-menu'>
                        <li className='hover:bg-gray-200 p-2 cursor-pointer'>
                            <Link className="text-justify" href='/booking'>Booking</Link>
                        </li>
                        <li className='hover:bg-gray-200 p-2 cursor-pointer'>
                            <Link className="text-justify" href='/technicians'>Technicians</Link>
                        </li>
                        <li className='hover:bg-gray-200 p-2 cursor-pointer'>
                            <Link className="text-justify" href='/testimonial'>Testimonial</Link>
                        </li>
                        <li className='hover:bg-gray-200 p-2 cursor-pointer'>
                            <Link className="text-justify" href='/404page'>404 Page</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className={url === menu[4] ? "text-red-600 uppercase font-bold text-sm" : "uppercase font-bold text-sm hover:text-red-600"} href='/contact'>Contact</Link>
                </li>
                <li className='bg-red-600 text-white py-5 cursor-pointer px-8 hover:bg-red-700'>
                    <Link href='#'>Get A Quote</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
