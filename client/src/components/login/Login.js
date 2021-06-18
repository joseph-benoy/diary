import React from 'react';
import Header from '../loginHeader/Header';
import Loginform from '../loginForm/Loginform';
import Registerform from '../registerForm/Registerform';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './login.scss';

const Login = ()=>{
    return(
        <>
        <Header/>
        <Router>
        <Link to="/" className="loginHeaderLinks" style={{borderTopRightRadius:0,borderBottomRightRadius:0}}>Log In</Link>
        <Link to="/register" className="loginHeaderLinks" style={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}>Sign Up</Link>
        <Switch>
            <Route exact path="/">
                <Loginform/>
            </Route>
            <Route path="/register">
                <Registerform/>
            </Route>
        </Switch>
        </Router>
        </>
    );
}

export default Login;