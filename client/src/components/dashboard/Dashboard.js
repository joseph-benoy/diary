import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Dashboard.scss';

const Dashboard = ()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
            </div>
        </div>
    );
}


export default Dashboard;