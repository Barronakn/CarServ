import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import TestimonialPage from '@/Components/TestimonialPage';
import Top from '@/Components/Top';
import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Testimonial" sectionLink="Testimonial" />
            <TestimonialPage />
            <Footer />
            <Top />
        </div>
    );
};

export default Testimonial;
