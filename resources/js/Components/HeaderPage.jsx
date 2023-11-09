import { Link } from '@inertiajs/react';
import React from 'react';

const HeaderPage = ({ sectionName, sectionLink }) => {
    return (
        <section className='header bg-header-page relative font-bold'>
            <div className='header-content px-32 absolute top-0 text-white bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center text-7xl'>{sectionName}</h1>
                    <ul className='flex justify-center items-center uppercase gap-2'>
                        <li className=''>
                            <Link className='hover:text-red-700 text-red-600' href='/'>
                                Home
                            </Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link className='hover:text-red-700 text-red-600' href='#'>
                                Pages
                            </Link>
                        </li>
                        <span>/</span>
                        <li>
                            <span className='text-white'>
                                {sectionLink}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeaderPage;
