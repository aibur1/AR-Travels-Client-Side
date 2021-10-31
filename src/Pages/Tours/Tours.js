import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h3>BEST OFFERS</h3>
                <h6 className="text-secondary">CHECK OUT OUR BEST PROMOTION TOURS</h6>

                <Row xs={1} md={3} className="g-4">
                        {
                         offers.map(offer => <Tour
                         key={offer._id}
                         offer={offer}
                         ></Tour>)
                        }
                </Row>

            </div>
        </div>

    );
};

export default Tours;