import { Link } from '@inertiajs/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className='header bg-footer relative'>
            <div className='px-28 w-full text-white bg-black bg-opacity-80'>
                <div className='footer-top flex gap-16 justify-center py-20'>
                    <div className='footer-address w-1/4'>
                        <h2 className='text-2xl font-bold'>Address</h2>
                        <div className=' flex flex-col gap-3 pt-8'>
                            <span>123 Street, New York, USA</span>
                            <span>+012 345 67890</span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className='footer-hours w-1/4'>
                        <h2 className='text-2xl font-bold'>Opening Hours</h2>
                        <div className='flex flex-col gap-3 pt-8'>
                            <div>
                                <h6 className='font-bold'>Monday - Friday:</h6>
                                <p>09.00 AM - 09.00 PM</p>
                            </div>
                            <div>
                                <h6 className='font-bold'>Saturday - Sunday:</h6>
                                <p>09.00 AM - 12.00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer-services w-1/4'>
                        <h2 className='text-2xl font-bold'>Services</h2>
                        <ul className='flex flex-col gap-3 pt-8'>
                            <li>
                                <Link className='hover:text-lg' href='#'>Diagnostic Test</Link>
                            </li>
                            <li>
                                <Link className='hover:text-lg' href='#'>Engine Servicing</Link>
                            </li>
                            <li>
                                <Link className='hover:text-lg' href='#'>Tires Replacement</Link>
                            </li>
                            <li>
                                <Link className='hover:text-lg' href='#'>Oil Changing</Link>
                            </li>
                            <li>
                                <Link className='hover:text-lg' href='#'>Vacuam Cleaning</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-newsletter w-1/4 flex flex-col gap-3'>
                        <h2 className='text-2xl font-bold'>Newsletter</h2>
                        <p className='py-1'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <form className='flex bg-white p-2' action="#">
                            <input className='w-44 h-10 border-none bg-transparent text-gray-500' type="email" name="email" id="email" placeholder='Your email' />
                            <input className='bg-red-600 px-3 hover:cursor-pointer hover:bg-red-700 uppercase font-bold' type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>
                <hr />
                <div className='footer-bottom flex gap-10 justify-between items-center py-8'>
                    <div>
                        <p>© <Link className='underline' href='#'>Your Site Name</Link>, All Right Reserved. Designed By <Link className='underline' href='#'>Barron</Link></p>
                    </div>
                    <div>
                        <ul className='flex gap-4'>
                            <li>
                                <Link href='/'>Home <span className='text-gray-400 ml-4'> | </span></Link>
                            </li>
                            <li>
                                <Link href='#'>Cookies <span className='text-gray-400 ml-4'> | </span></Link>
                            </li>
                            <li>
                                <Link href='#'>Help <span className='text-gray-400 ml-4'> | </span></Link>
                            </li>
                            <li>
                                <Link href='#'> FQAs </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
