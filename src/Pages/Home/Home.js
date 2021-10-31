import React from 'react';
import Banner from '../Banner/Banner';
import Chose from '../Chose Us/Chose';
import Customer from '../CustomersSay/Customer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Tours></Tours>
            <Chose></Chose>
            <Customer></Customer>
            <Footer></Footer>
        </div>
    );
};

export default Home;