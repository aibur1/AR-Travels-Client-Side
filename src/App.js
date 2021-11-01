import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tours from './Pages/Tours/Tours';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Pages/My orders/MyOrders';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booked from './Pages/Booked/Booked';
import AddService from './Pages/AddService/AddService';
import ManageOffer from './Pages/ManageOffer/ManageOffer';
import Update from './Pages/Update/Update';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
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
        <PrivateRoute path="/booking/:serviceId">
          <Booked></Booked>
        </PrivateRoute>
        <Route path="/offers/update/:id">
         <Update></Update>
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
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
