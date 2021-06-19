import './App.css';
import Loginform from './components/loginForm/Loginform';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Registerform from './components/registerForm/Registerform';
import Settings from './components/settings/Settings'
import CreateEntry from './components/createEntry/Createentry';
import Read from './components/read/Read';
import Memories from './components/memories/Memories';

















function App() {
  return (
    <div className="App">
        <>
          <Router>
            <Switch>
                <Route exact path="/">
                  <Loginform/>
                </Route>
                <Route exact path="/dashboard/home">
                  <Dashboard/>
                </Route>
                <Route exact path="/register">
                  <Registerform/>
                </Route>
                <Route path="/dashboard/home">
                  <Dashboard/>
                </Route>
                <Route path="/dashboard/createentry">
                <Dashboard/>
                </Route>
                <Route path="/dashboard/read">
                <Dashboard/>
                </Route>
                <Route path="/dashboard/memories">
                <Dashboard/>
                </Route>
                <Route  path="/dashboard/settings">
                <Dashboard/>
                </Route>
            </Switch>
          </Router>
        </>
    </div>
  );
}

export default App;
