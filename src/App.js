import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Tours from './Pages/Tours/Tours';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Pages/My orders/MyOrders';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booked from './Pages/Booked/Booked';
import AddService from './Pages/AddService/AddService';
import ManageOffer from './Pages/ManageOffer/ManageOffer';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/tours">
          <Tours></Tours>
        </Route>
        <PrivateRoute  path="/myorders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/booking/:serviceId">
          <Booked></Booked>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/manageOffers">
        <ManageOffer></ManageOffer>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        </Switch>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
