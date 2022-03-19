import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../image/chose-bg/back.jpg';
import './Chose.css';

const Chose = () => {
    return (
    <Container className='test'>
        <h1 className="text-center text-primary">WHY CHOOSE US</h1>
        <Row className='chose chose_2 gy-3'>
           <Col sm={12} md={12} lg={4}>
           <div className="bg-white p-4">
                        <h3 className="text-center ">Handpicked Hotels</h3>
                        <p className='text'>We offer vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
           </Col>
            <Col sm={12} md={12} lg={4}>
            <div className="bg-white p-4">
                        <h3 className="text-center">Handpicked Hotels</h3>
                        <p className='text'>We offer vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
            
            </Col>
            <Col sm={12} md={12} lg={4}>
            
            <div className=" bg-white p-4">
                        <h3 className="text-center">Best Price Guarantee</h3>
                        <p className='text'>Best prices on 682 hotels in all around the world Book accommodation in Dhaka, ... They can offer you car for traveling at your convenience.</p>
                        <Link> <p className="text-center text-danger btn">Learn More</p></Link>
                    </div>
            </Col>
       </Row>
   </Container>

    );
};

export default Chose;


{/* <div className="chose my-5 ">
                <h1 className="text-center py-5">WHY CHOOSE US</h1>

                <div className="row chose_2">

                    <div className="col-md-3  bg-white p-4">
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
            </div> */}