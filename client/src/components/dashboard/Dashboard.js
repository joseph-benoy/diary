import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Dashboard.scss';
import {BrowserRouter as Router,Switch,Route,useRouteMatch,Link} from 'react-router-dom';
import Settings from '../settings/Settings';
import CreateEntry from '../createEntry/Createentry';
import Read from '../read/Read';
import Memories from '../memories/Memories';
import Home from '../home/Home';

const Dashboard = ()=>{
    const path = useRouteMatch();
    return (
        <div className="container-fluid">
            <Sidebar/>
        </div>
    );
}


export default Dashboard;