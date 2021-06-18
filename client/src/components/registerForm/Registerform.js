import React,{useState} from 'react';
import '../loginForm/Loginform.scss';


const Registerform = ()=>{
    let [username,setUsername] = useState();
    let [password,setPassword] = useState();
    let [cpassword,setCpassword] = useState();
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
    const changeUsername = (e)=>{
        setUsername(e.target.value);
    }
    return(
        <div className="container-fluid main ">
        <form className="gy-2 gx-3 align-items-center">
        <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="fullname">Full name</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="fullname" placeholder="John Doe" name="fullname"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="username">Email</label>
                    <div className="input-group">
                    <input type="text" onChange={changeUsername} className="form-control" id="username" placeholder="johndoe@example.com" name="username"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <label className="form-label" htmlFor="cpassword">Confirm password</label>
                    <div className="input-group">
                    <input name="cpassword" type="password" className="form-control" id="cpassword" placeholder="Confirm password"/>
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
                    <button className="btn btn-primary signin" type="button">Sign Up</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Registerform;