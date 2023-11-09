import { Link } from '@inertiajs/react';
import React from 'react';

const PageContact = () => {
    return (
        <section className='contacts p-20'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h1 className='uppercase font-bold text-red-700'>// Contact Us //</h1>
                <p className='text-4xl text-sky-950 font-bold'>Contact For Any Query</p>
            </div>
            <div className='mail-contact flex gap-6 my-10 justify-center items-center'>
                <div className='bg-gray-200 h-28 w-1/3 flex flex-col pl-3 justify-center'>
                    <h2 className='uppercase font-bold text-sky-950 text-xl'>// Booking //</h2>
                    <p className='text-gray-500'>book@example.com</p>
                </div>
                <div className='bg-gray-200 h-28 w-1/3 flex flex-col pl-3 justify-center'>
                    <h2 className='uppercase font-bold text-sky-950 text-xl'>// General //</h2>
                    <p className='text-gray-500'>info@example.com</p>
                </div>
                <div className='bg-gray-200 h-28 w-1/3 flex flex-col pl-3 justify-center'>
                    <h2 className='uppercase font-bold text-sky-950 text-xl'>// Technical //</h2>
                    <p className='text-gray-500'>tech@example.com</p>
                </div>
            </div>
            <form className='mx-44' action="#">
                <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link className='text-red-600 hover:text-red-700' href='#'> Download Now.</Link></p>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className='flex gap-5 items-center mt-3 w-full'>
                        <input className='w-full focus:border-red-600' type="text" name="name" id="name" placeholder='Your Name' />
                        <input className='w-full' type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <input className='w-full' type="text" name='subject' id='subject' placeholder='Subject' />
                    <textarea className='w-full' name="message" id="message" cols="30" rows="3" placeholder='Message'></textarea>
                    <input className='w-full bg-red-600 text-white py-4 cursor-pointer px-8 uppercase hover:bg-red-700' type="submit" value="Send message" />

                </div>
            </form>
        </section>
    );
};

export default PageContact;
