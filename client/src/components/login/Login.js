import React from 'react';
import Header from '../loginHeader/Header';
import Loginform from '../loginForm/Loginform';
import Registerform from '../registerForm/Registerform';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './login.scss';

const Login = ()=>{
    const toggleLoginRouter = (e)=>{
        let loginLink = document.getElementById('loginLink');
        let registerLink = document.getElementById('registerLink');
        if(e==="loginLink"){
            loginLink.classList.add('active');
            registerLink.classList.remove('active');
        }
        else{
            loginLink.classList.remove('active');
            registerLink.classList.add('active');
        }
    }/*
    return(
        <div>
        <Router>
        <Header/>
        <Link to="/" id="loginLink" onClick={()=>toggleLoginRouter("loginLink")} className="loginHeaderLinks active" style={{borderTopRightRadius:0,borderBottomRightRadius:0}}>Log In</Link>
        <Link to="/register" id="registerLink" onClick={()=>toggleLoginRouter("registerLink")} className="loginHeaderLinks" style={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}>Sign Up</Link>
        <Switch>
            <Route exact path="/">
                <Loginform/>
            </Route>
            <Route path="/register">
                <Registerform/>
            </Route>
        </Switch>
        </Router>
        </div>
    );*/
    return(
        <>
        <Header/>
        <Loginform/>
        </>
    );
}

export default Login;