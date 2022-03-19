import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://glacial-caverns-41511.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            // .then(data => setOrders(data))
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h3 className="text-center">You booked{orders.length}</h3>
            <ul>
                {orders.map(order => <li
                    key={order._id}>

                    <div className="text-center">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={order.img} />
  <Card.Body>
    <Card.Title>{order.name}</Card.Title>
    <Card.Title>{order.email}</Card.Title>
    <Card.Title>{order.phone}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    
  </Card.Body>
</Card>
                        {/* {order.name} <br />
                        {order.email} <br />

                        {order.address}<br />
                        {order.city} <br />
                        {order.phone}
                        <img src={order.img}/> */}
                    </div>
                    


                </li>)}
            </ul>
        </div>
    );
};

export default MyOrders;