import './App.css';
import LoginPage from './components/login/Login';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Registerform from './components/registerForm/Registerform';

function App() {
  return (
    <div className="App">
        <>
          <Router>
            <Switch>
                <Route exact path="/">
                  <LoginPage/>
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard/>
                </Route>
                <Route exact path="/register">
                  <Registerform/>
                </Route>
            </Switch>
          </Router>
        </>
    </div>
  );
}

export default App;
