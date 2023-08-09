import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{width:'100%'}}>
            <Header/>
            <main className='main'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;