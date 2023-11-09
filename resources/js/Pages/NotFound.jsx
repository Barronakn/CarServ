import Footer from '@/Components/Footer';
import HeaderPage from '@/Components/HeaderPage';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import NotFoundPage from '@/Components/NotFoundPage';
import Top from '@/Components/Top';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <Nav />
            <NavResponsive />
            <HeaderPage sectionName="Not Found" sectionLink="404" />
            <NotFoundPage />
            <Footer />
            <Top />
        </div>
    );
};

export default NotFound;
