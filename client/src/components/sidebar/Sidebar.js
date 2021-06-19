import { Link, useParams } from 'react-router-dom';
import './Sidebar.scss';
import {useEffect } from 'react';


const Sidebar = ()=>{
    const {page} = useParams();
    useEffect(()=>{
        document.getElementById(page).style = "color:#7952b3;background-color:white";
        return ()=>{
            const element = document.getElementById(page);
            if(element!=null){
                element.style = "color:white;background-color:#7952b3";
            }
        }
    });
    return(
        <div className="col-lg-1 sidebar">
            <div className="container-fluid" style={{padding:0}}>
                <div className="row">
                    <Link to="/dashboard/home" className="logoLink"><i className="bi bi-journal-text"></i></Link>
                </div>
                <div className="row navlinks">
                    <Link to="/dashboard/home" id="home"><i className="bi bi-house-door"></i></Link>
                    <Link to="/dashboard/createentry" id="createentry"><i className="bi bi-file-earmark-plus"></i></Link>
                    <Link to="/dashboard/read" id="read"><i className="bi bi-book"></i></Link>
                    <Link to="/dashboard/memories" id="memories"><i className="bi bi-bookmark-heart"></i></Link>
                    <Link to="/dashboard/settings" id="settings"><i className="bi bi-gear"></i></Link>
                    <Link to="/"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
            </div>
        </div>
    );
}


export default Sidebar;