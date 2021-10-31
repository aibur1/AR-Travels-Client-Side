import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../image/logo/ar.jpg'
import useAuth from '../hooks/useAuth';

import "./Header.css";

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="col-xm-12">

            <nav className="py-3 travel ">
                <img className="image" src={img} alt="" />
                <div>
                    <NavLink className="nab" to="/home">HOME</NavLink>
                    <NavLink className="nab" to="/tours">TOURS</NavLink>
                    <NavLink className="nab" to="/myorders">MY-ORDERS</NavLink>
                    <NavLink className="nab" to="/about">ABOUT</NavLink>
                    <NavLink className="nab" to="/contact">CONTACT</NavLink>
                    <NavLink className="nab" to="/login">LOGIN</NavLink>
                    <span>{user.displayName} </span>
                    {user?.email && <button onClick={logout}>LOGOUT</button>}



                </div>

            </nav>

        </div>
    );
};

export default Header;