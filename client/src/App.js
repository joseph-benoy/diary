import './App.css';
import LoginPage from './components/login/Login';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
        <>
          <Router>
            <Switch>
                <Route exact path="/">
                  <LoginPage/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
            </Switch>
          </Router>
        </>
    </div>
  );
}

export default App;
