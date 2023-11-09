import BookingPage from '@/Components/BookingPage';
import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import Top from '@/Components/Top';
import React from 'react';

const Booking = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Booking" sectionLink="Booking" />
            <BookingPage />
            <Footer />
            <Top />
        </div>
    );
};

export default Booking;
