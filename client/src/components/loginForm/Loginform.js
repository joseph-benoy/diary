import React from 'react';
import './Loginform.scss';


const Loginform = ()=>{
    return(
        <div className="container-fluid" style={{padding:"5vw"}}>
        <form className="gy-2 gx-3 align-items-center">
            <div className="row">
            <div className="col-auto">
                <label className="form-label" htmlFor="username">Username</label>
                <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" className="form-control" id="username" placeholder="Username" name="username"/>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-auto">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="input-group">
                <div className="input-group-text" style={{color:"black"}}>&#128274;</div>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-auto">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="passwordToggle" name="passwordToggle" />
                <label className="form-check-label" htmlFor="passwordToggle">
                    Show password
                </label>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Sign In</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Loginform;