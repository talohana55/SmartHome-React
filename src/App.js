import React from 'react'
import {BrowserRouter as Router,  Switch, Route,  Redirect,} from 'react-router-dom'
import Home from './routs/Home'
import NewRoom from "./routs/NewRoom";
import Room from "./routs/Room";


const App = () => {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home  />
            </Route>
            <Route path="/newroom" exact>
              <NewRoom />
            </Route>
            <Route path="/room" exact>
              <Room />
            </Route>
          </Switch>
        </main>
      </Router>
    );
}

export default App
