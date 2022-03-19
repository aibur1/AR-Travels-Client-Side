import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../image/logo/ar.jpg'
import useAuth from '../hooks/useAuth';

import "./Header.css";

const Header = () => {
    const { user, logout } = useAuth();
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
       
        {/* <img className='image' src={img} /> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/tours">TOURS</Nav.Link>
            
            
           { user?.email && <NavDropdown title="DASHBOARD" id="collasible-nav-dropdown">
            {/* {user?.email && <NavLink className="nab" to="/myorders" >MY-ORDERS</NavLink>}
//                 {user?.email && <NavLink className="nab" to="/manageOffers">MANAGE-OFFERS</NavLink>}
//                {user?.email && <NavLink className="nab" to="/addService">ADD-OFFER</NavLink>} */}
              <NavDropdown.Item href="/myorders">My-Orders</NavDropdown.Item>
              <NavDropdown.Item href="/manageOffers">Manage-Offers</NavDropdown.Item>
              <NavDropdown.Item href="/addService">Add-Offer</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>}
          </Nav>
          <Nav>
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <span className='text-white pt-2'>{user.displayName} </span>
            {user.email && <Nav.Link eventKey={2} onClick={logout}>LOGOUT</Nav.Link>}

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
 ); 
};

export default Header;

// return (
//     <div className="col-xm-12">

//         <nav className="py-3 travel ">
//             <img className="image" src={img} alt="" />
//             <div>
//                 <NavLink className="nab" to="/home">HOME</NavLink>
//                 <NavLink className="nab" to="/tours">TOURS</NavLink>
//                 {user?.email && <NavLink className="nab" to="/myorders" >MY-ORDERS</NavLink>}
//                 {user?.email && <NavLink className="nab" to="/manageOffers">MANAGE-OFFERS</NavLink>}
//                {user?.email && <NavLink className="nab" to="/addService">ADD-OFFER</NavLink>}
//                 <NavLink className="nab" to="/login">LOGIN</NavLink>
//                 <span>{user.displayName} </span>
//                 {user?.email && <button onClick={logout}>LOGOUT</button>}
//             </div>
//         </nav>
//     </div>
// );