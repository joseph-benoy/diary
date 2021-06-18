import React,{useState} from 'react';
import '../loginForm/Loginform.scss';
import './error.scss';

const Registerform = ()=>{
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    let [cpassword,setCpassword] = useState("");
    let [fullname,setFullname] = useState("");
    let [error,setError] = useState("");
    const togglePassword = ()=>{
        const pass = document.getElementById('password');
        const cpass = document.getElementById('cpassword');
        if(pass.getAttribute('type')==='text'){
            pass.setAttribute('type','password');
            cpass.setAttribute('type','password');
        }
        else{
            pass.setAttribute('type','text');
            cpass.setAttribute('type','text');
        }
    }
    const validateCred = ()=>{
        if(username===""){
            setError("Username can't be empty!");
        }
        else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(username)){
            setError("Invalid email!");
        }
        else if(password===""){
            setError("Password can't be empty!");
        }
        if(password.length<8){
            setError("Password must contain atleast 8 characters!");
        }
        else if(cpassword===""){
            setError("Confirm your password!");
        }
        else if(fullname===""){
            setError("Full name can't be empty!");
        }
        else if(cpassword!==password){
            setError("Passwords don't match!")
        }
        else{
            setError("");
        }
    }
    return(
        <div className="container-fluid main ">
            {error!=""?            <div className="errorBox">
                <p>{error}</p>
            </div>:null}
        <form className="gy-2 gx-3 align-items-center" autoComplete="off">
        <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="fullname">Full name</label>
                    <div className="input-group">
                    <input type="text" className="form-control" onChange={(e)=>setFullname(e.target.value)} id="fullname" placeholder="John Doe" name="fullname"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="username">Email</label>
                    <div className="input-group">
                    <input type="email" onChange={(e)=>setUsername(e.target.value)} className="form-control" id="username" placeholder="johndoe@example.com" name="username"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group">
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" name="password"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="cpassword">Confirm password</label>
                    <div className="input-group">
                    <input name="cpassword" type="password" onChange={(e)=>setCpassword(e.target.value)} className="form-control" id="cpassword" placeholder="Confirm password"/>
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
                    <button onClick={validateCred} className="btn btn-primary signin" type="button">Sign Up</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Registerform;