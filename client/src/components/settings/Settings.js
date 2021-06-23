import { useEffect,useState } from 'react';
import './Settings.scss';
import axios from 'axios';

const Settings = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [fullname,setFullname] = useState('');
    const updateSettings = (e)=>{
        e.preventDefault();
    }
    const togglePassword = ()=>{
        const pass = document.getElementById('password');
        if(pass.getAttribute('type')==='text'){
            pass.setAttribute('type','password');
        }
        else{
            pass.setAttribute('type','text');
        }
    }
    useEffect(async ()=>{
        try{
            let result = await axios.get('/getcred');
            console.log(result);
            if(result.data.username!=""){
                setUsername(result.data.username);
                setFullname(result.data.fullname);
            }
        }
        catch(err){
            console.error(err);
        }
    },[]);
    return(
        <>
        <h1>Settings</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Account
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <form style={{width:"100%",height:"50vh"}}>
                    <label htmlFor="fullname">Full name</label>
                    <input id="fullname" onChange={(e)=>{setFullname(e.target.value)}} value={fullname} name="fullname" type="text" className="form-control" placeholder="John Doe"/>
                    <label htmlFor="username">Username</label>
                    <input id="username" onChange={(e)=>{setUsername(e)}} value={username} name="username" type="text" className="form-control" placeholder="johndoe@example.com"/>
                    <label htmlFor="username">Password</label>
                    <input id="password" onChange={(e)=>setPassword(e)} value={password} name="password" type="password" className="form-control" placeholder="password"/>
                    <input style={{marginTop:"2vh"}} onClick={togglePassword} className="form-check-input" type="checkbox" id="passwordToggle" name="passwordToggle" />
                    <label style={{marginTop:"1.2vh"}} className="form-check-label"  htmlFor="passwordToggle">
                        Show password
                    </label>
                    <button onClick={updateSettings}className="btn btn-primary" style={{float:"right",marginTop:"3vh"}}>Update</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    </>
    );
}





export default Settings;