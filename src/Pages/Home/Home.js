import React from 'react';
import Banner from '../Banner/Banner';
import Chose from '../Chose Us/Chose';
import Customer from '../CustomersSay/Customer';
import Tours from '../Tours/Tours';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tours></Tours>
            <Chose></Chose>
            <Customer></Customer>
         
        </div>
    );
};

export default Home;