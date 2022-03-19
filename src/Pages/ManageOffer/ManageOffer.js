import React, { useEffect, useState } from 'react';
import { Button, Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOffer.css';

const ManageOffer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('https://glacial-caverns-41511.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            const url = `https://glacial-caverns-41511.herokuapp.com/${id}`;
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
        <div className='mounting gx-5 ' >
            {
                offers.map(offer => <div className='' key={offer._id}>
                    <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={offer.img} />
               <Card.Body>
                   <Card.Title>{offer.name}</Card.Title>
                   <Card.Title>${offer.price}</Card.Title>
              <Card.Text>
                {offer.description}
                </Card.Text>
                <Link  to={`/offers/update/${offer._id}`}><button className='bg-primary'>Update</button></Link>
                <Button onClick={() => handleDelete(offer._id)} variant="danger mx-2">Delete</Button>
             
                
            </Card.Body>
          </Card>
                    {/* < img src={offer.img}/>
                    <h3>{offer.name}</h3>
                    <h3>${offer.price}</h3>
                    <p>{offer.description}</p>
                    <Link to={`/offers/update/${offer._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(offer._id)}>Delete</button> */}
                 </div>)
            }
        </div>
    );
};

export default ManageOffer;