import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ()=>{
    return(
        <div className="container-fluid sidebar">
            <div className="row">
                <Link to="/" className="logoLink"><i className="bi bi-journal-text"></i></Link>
            </div>
            <div className="row">
                <ul>
                    <li><Link to="/dashboard"><i className="bi bi-house-door"></i></Link></li>
                    <li><Link to="/createEntry"><i className="bi bi-file-earmark-plus"></i></Link></li>
                    <li><Link to="/read"><i className="bi bi-book"></i></Link></li>
                    <li><Link to="/memories"><i className="bi bi-bookmark-heart"></i></Link></li>
                    <li><Link to="/settings"><i className="bi bi-gear"></i></Link></li>
                </ul>
            </div>
        </div>
    );
}


export default Sidebar;