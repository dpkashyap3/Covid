import React from 'react';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Summary from "./components/Summary"
import India from "./components/India"
import Official from "./components/Official"
import Testing from "./components/ICMR"
import Fetch from "./components/Breakdown/Fetch"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav/>
    <div className="bg-secondary">
      <Main/>
      <Switch>
      <Route path="/" exact component={Summary}/>
      <Route path="/india" component={India}/>
      <Route path="/official" component={Official}/>
      <Route path="/testing" component={Testing}/>
      <Route path="/summary" component={Fetch}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
