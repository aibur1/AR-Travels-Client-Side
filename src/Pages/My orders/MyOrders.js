import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://glacial-caverns-41511.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>You booked{orders.length}</h3>
            <ul>
                {orders.map(order => <li
                key={order._id}
                >{order.name} : {order.email}</li>)}
            </ul>
        </div>
    );
};

export default MyOrders;