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
    }
    return(
        <>
        <Header/>
        <Loginform/>
        </>
    );
}

export default Login;