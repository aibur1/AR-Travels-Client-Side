import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () =>{
      signInUsingGoogle()
      .then(result => {
          history.push(redirect_uri);
      })
    }


    return (
        <div>

            <div className="form-bg">
                <h2>Login Please</h2>
                <form >
                    <input className="input w-50" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="input w-50 my-3" type="password" name="" id="" placeholder="Enter password" />
                    <br />
                    <input className="input w-25 bg-primary text-white" type="submit" value="Submit" />
                </form>
                {/* <p>New User? <Link to="/register">Create Account</Link></p> */}
                <div>---------or--------</div>
                <button
                    className="button "
                    onClick={handleGoogleLogin}
                >Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;