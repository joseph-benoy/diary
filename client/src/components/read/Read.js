import "./Read.scss";
import Calendar from 'react-calendar';
import { useState } from "react";

const Read = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <h1>Read diary</h1>
                </div>
                <div className="col-lg-7">
                    <input type="date" className="form-control" max={new Date().toISOString().split("T")[0]} />
                </div>
                <div className="col-lg-2">
                    <button className="saveBtn">Read</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {}
                </div>
            </div>
        </div>
    );
}





export default Read;