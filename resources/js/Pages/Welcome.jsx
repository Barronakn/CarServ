import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import React from 'react';

const Welcome = () => {
    return (
        <div className='relative'>
            <Nav />
            <NavResponsive />
            <Header />
        </div>
    );
};

export default Welcome;
