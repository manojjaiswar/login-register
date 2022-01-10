import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Card } from 'primereact/card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';
function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Card className='homepage'>
            <Route exact path="/">
              {
                user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
              }
            </Route>
            <Route path="/login">
              <Login setLoginUser={setLoginUser} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Card>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
