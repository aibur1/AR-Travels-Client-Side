import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const [offer, setOffer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/offers/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, []);

    //update user
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedInfo = { name: updatedName, price: offer.price };
        setOffer(updatedInfo)
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedInfo = { name: offer.name, price: updatedPrice };
        setOffer(updatedInfo);
    }

    const handleUpdateUser = e => {
        const url = `http://localhost:5000/offers/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(offer)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    alert('Updated Successfullly.')
                    setOffer({});
                }
            })



        e.preventDefault();
    }

    return (
        <div>
            <h3>update:{offer.name} {offer.price}</h3>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={offer.name || ''} />
                <input type="number" onChange={handlePriceChange} value={offer.price || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;