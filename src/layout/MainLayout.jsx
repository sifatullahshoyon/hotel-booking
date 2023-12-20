import React from 'react';
import Header from '../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <div className="md:min-h-[calc(100vh-296px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;