import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/chose-bg/back.jpg';
import './Chose.css';

const Chose = () => {
    return (
        <div>

            <div className="chose my-5 ">
                <h1 className="text-center py-5">WHY CHOOSE US</h1>

                <div className="d-flex chose_2">

                    <div className="col-md-3 bg-white p-4">
                        <h3 className="text-center">Handpicked Hotels</h3>
                        <p>We offer vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
                    <div className="col-md-3 bg-white p-4">
                        <h3 className="text-center">World Class Service</h3>
                        <p>Typically, the basic hotel services include reception guests, room service, food service, including restaurants in the hotel, and security.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
                    <div className="col-md-3 bg-white p-4">
                        <h3 className="text-center">Best Price Guarantee</h3>
                        <p>Best prices on 682 hotels in all around the world Book accommodation in Dhaka, ... They can offer you car for traveling at your convenience.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Chose;