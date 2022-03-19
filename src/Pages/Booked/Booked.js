import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booked.css';

const Booked = () => {
    let { serviceId } = useParams();
    const [offer, setOffer] = useState({});
    

    useEffect( () => {
        fetch(`https://glacial-caverns-41511.herokuapp.com/offers/${serviceId}`)
        .then(res => res.json())
        .then(data => setOffer(data))
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {



        fetch('https://glacial-caverns-41511.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked successfully')
                    reset();
                }
            })
        console.log(data)
    };

    return (
        <div className="text-center d-flex booked">

            {/* <h2>this is booked:{serviceId}</h2> */}


            <div className="">
                <Row xs={1} md={3} className="g-4 ">
                    <Col>
                        <Card className="text-center">

                            <Card.Img variant="top" src={offer.img} />
                            <Card.Body>
                                <Card.Title> {offer.name}</Card.Title>
                                <h4>${offer.price}</h4>
                                <h6>{offer.description}</h6>
                                {/* <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>



            <div className="">
                <h3>Please Confirm Booking</h3>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />

                    <input defaultValue={offer.img} {...register("img", { required: true })} />
                    
                    
                    
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" value="Booking Confirm" />
                </form>
            </div>
        </div>




    );
};

export default Booked;