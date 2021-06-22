import "./Read.scss";
import Calendar from 'react-calendar';
import { useState } from "react";
import axios from 'axios';



const Read = ()=>{
    const [entryTitle,setEntryTitle] = useState('');
    const [entryData,setEntryData] = useState('');
    const [date,setDate] = useState(new Date().toLocaleDateString("en-GB", { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }));
    const getEntryByDate = async ()=>{
        try{
            let result = await axios.post('/getentrybydate',{date:date});
            if(result.data.title!=""&&result.data.data!=""){
                setEntryTitle(result.data.title);
                setEntryData(result.data.data);
                document.getElementById('dataView').innerHTML = result.data.data;
                let arr = date.split("/");
                document.getElementById('dateView').innerHTML = new Date(arr[2],arr[1]-1,arr[0]).toLocaleDateString([],{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }
            else{
                setEntryTitle('Nothing found!');
                setEntryData('');
                document.getElementById('dataView').innerHTML ="";
            }
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
                    <input type="date" onChange={(e)=>setDate(new Date(e.target.value).toLocaleDateString("en-GB", { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }))} className="form-control" max={new Date().toLocaleDateString()} />
                </div>
                <div className="col-lg-2">
                    <button className="saveBtn" onClick={getEntryByDate}>Read</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <hr/>
                    <h2 style={{textAlign:'center'}}>{entryTitle}</h2>
                    <h6 style={{textAlign:'center'}} id="dateView">Search with a date</h6>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12" id="dataView">
                </div>
            </div>
        </div>
    );
}




export default Read;