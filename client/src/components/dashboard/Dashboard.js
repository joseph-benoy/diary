import Sidebar from '../sidebar/Sidebar';
import './Dashboard.scss';
import {Route} from 'react-router-dom';
import Settings from '../settings/Settings';
import CreateEntry from '../createEntry/Createentry';
import Read from '../read/Read';
import Memories from '../memories/Memories';
import Home from '../home/Home';



const Dashboard = ()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-lg-11 tabContainer">
                    <Route path="/dashboard/home">
                        <Home/>
                    </Route>
                    <Route path="/dashboard/createentry">
                        <CreateEntry/>
                    </Route>
                    <Route path="/dashboard/read">
                        <Read/>
                    </Route>
                    <Route path="/dashboard/memories">
                        <Memories/>
                    </Route>
                    <Route path="/dashboard/settings">
                        <Settings/>
                    </Route>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;