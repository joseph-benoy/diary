import React,{useState} from 'react';
import './Loginform.scss';

const Loginform = ()=>{
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    let [error,setError] = useState("");
    const togglePassword = ()=>{
        const pass = document.getElementById('password');
        if(pass.getAttribute('type')==='text'){
            pass.setAttribute('type','password');
        }
        else{
            pass.setAttribute('type','text');
        }
    }
    const validateCred = ()=>{
        if(username===""){
            setError("Username can't be empty!");
        }
        else if(password===""){
            setError("Password can't be empty!");
        }
        else{
            setError("");
        }
    }
    return(
        <div className="container-fluid main " style={{paddingTop:"12vh"}}>
        {error!==""?<div className="errorBox">
                <p>{error}</p>
            </div>:null}
        <form className="gy-2 gx-3 align-items-center">
            <div className="row">
            <div className="col-auto">
                <label className="form-label" htmlFor="username">Username</label>
                <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" id="username" placeholder="johndoe@example.com" name="username"/>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-auto">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="input-group">
                <div className="input-group-text"><i className="bi bi-shield-lock"></i></div>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder="Password"/>
                </div>
            </div>
            </div>
            <div className="row" style={{padding:"2vh 0vw"}}>
            <div className="col-auto">
                <div className="form-check">
                <input onClick={togglePassword} className="form-check-input" type="checkbox" id="passwordToggle" name="passwordToggle" />
                <label className="form-check-label"  htmlFor="passwordToggle">
                    Show password
                </label>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="d-grid gap-2 col-12">
                    <button className="btn btn-primary signin" onClick = {validateCred} type="button">Sign In</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Loginform;