import { Link } from '@inertiajs/react';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-8 py-20'>
            <h1 className='text-7xl text-sky-950 font-bold'>404</h1>
            <h2 className='text-4xl text-sky-950 font-bold'>Page Not Found</h2>
            <p className='text-gray-500 w-1/3 text-center'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
            </p>
            <Link className='bg-red-600 text-white py-4 cursor-pointer px-8 uppercase hover:bg-red-700 rounded-full font-bold' href='/'>Go Back To Home</Link>
        </section>
    );
};

export default NotFoundPage;
