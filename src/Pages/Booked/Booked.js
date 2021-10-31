import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import useAuth from '../hooks/useAuth';
import './Booked.css';

const Booked = () => {
    let { serviceId } = useParams();
    const [offer, setOffer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/offers/${serviceId}`)
        .then(res => res.json())
        .then(data => setOffer(data));
    }, [])


    // const { register, handleSubmit,formState: { errors } } = useForm();
    // const {user} = useAuth();
    // const onSubmit = data => {
    //     console.log(data)
    // };
    return (
        <div>
             <h2>Details of:{offer.name}</h2>
            <h2>this is booked:{serviceId}</h2>
            {/* <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
             
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form> */}
        </div>
    );
};

export default Booked;