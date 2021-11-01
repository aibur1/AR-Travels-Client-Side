import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOffer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/offers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = offers.filter(offer => offer._id !== id);
                        setOffers(remaining);
                    }

                })
        }
    }


    return (
        <div className="text-center">
            <h2>Hello from manage offer</h2>
            {
                offers.map(offer => <div key={offer._id}>
                    <h3>{offer.name}</h3>
                    <button onClick={() => handleDelete(offer._id)}>Delete</button>
                    <Link to={`/offers/update/${offer._id}`}><button>Update</button></Link>

                </div>)
            }


        </div>
    );
};

export default ManageOffer;