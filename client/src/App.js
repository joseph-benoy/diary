import './App.css';
import Loginform from './components/loginForm/Loginform';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Registerform from './components/registerForm/Registerform';


















function App() {
  return (
    <div className="App">
        <>
          <Router>
            <Switch>
                <Route exact path="/">
                  <Loginform/>
                </Route>
                <Route exact path="/register">
                  <Registerform/>
                </Route>
                <Route path="/dashboard/:page">
                  <Dashboard/>
                </Route>
            </Switch>
          </Router>
        </>
    </div>
  );
}

export default App;
