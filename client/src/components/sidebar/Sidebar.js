import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ()=>{
    return(
        <div className="col-lg-1 sidebar">
            <div className="row">
                <Link to="/" className="logoLink"><i className="bi bi-journal-text"></i></Link>
            </div>
            <div className="row navlinks">
                <Link to="/dashboard"><i className="bi bi-house-door"></i></Link>
                <Link to="/createEntry"><i className="bi bi-file-earmark-plus"></i></Link>
                <Link to="/read"><i className="bi bi-book"></i></Link>
                <Link to="/memories"><i className="bi bi-bookmark-heart"></i></Link>
                <Link to="/settings" id="settingsLink"><i className="bi bi-gear"></i></Link>
            </div>
        </div>
    );
}


export default Sidebar;