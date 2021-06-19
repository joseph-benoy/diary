import { Link } from 'react-router-dom';
import './Sidebar.scss';
import {BrowserRouter as Router,Switch,Route,useRouteMatch} from 'react-router-dom';
import Settings from '../settings/Settings';
import CreateEntry from '../createEntry/Createentry';
import Read from '../read/Read';
import Memories from '../memories/Memories';
import Home from '../home/Home';

const Sidebar = ()=>{
    return(
        <div className="col-lg-1 sidebar">
            <div className="row">
                <Link to="/dashboard/home" className="logoLink"><i className="bi bi-journal-text"></i></Link>
            </div>
            <div className="row navlinks">
                <Link to="/dashboard/home"><i className="bi bi-house-door"></i></Link>
                <Link to="/dashboard/createentry"><i className="bi bi-file-earmark-plus"></i></Link>
                <Link to="/dashboard/read"><i className="bi bi-book"></i></Link>
                <Link to="/dashboard/memories"><i className="bi bi-bookmark-heart"></i></Link>
                <Link to="/dashboard/settings"><i className="bi bi-gear"></i></Link>
                <Link to="/"><i className="bi bi-box-arrow-left"></i></Link>
            </div>
        </div>
    );
}


export default Sidebar;