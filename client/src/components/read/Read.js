import "./Read.scss";
import Calendar from 'react-calendar';
import { useState } from "react";
import axios from 'axios';



const Read = ()=>{
    const [date,setDate] = useState(new Date().toLocaleDateString("en-GB", { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }));
    const getEntryByDate = async ()=>{
        try{
            let result = axios.post('/getentrybydate',{date:dated});
        }
        catch(err){
            console.error(err);
        }
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <h1>Read diary</h1>
                </div>
                <div className="col-lg-7">
                    <input type="date" onChange={(e)=>setDate(e.target.value)} className="form-control" max={new Date().toISOString().split("T")[0]} />
                </div>
                <div className="col-lg-2">
                    <button className="saveBtn" onClick={getEntryByDate}>Read</button>
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