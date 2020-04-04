import React from 'react';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Summary from "./components/Summary"
import India from "./components/India/India"
import Official from "./components/India/Official"
import Testing from "./components/ICMR"
import Footer from "./components/Footer"
import Fetch from "./components/Breakdown/Fetch"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav/>
    <div className="bg-secondary">
      <Main/>
      <Switch>
      <Route path="/covid" exact component={Summary}/>
      <Route path="/covid/india" component={India}/>
      <Route path="/covid/official" component={Official}/>
      <Route path="/covid/testing" component={Testing}/>
      <Route path="/covid/summary" component={Fetch}/>
      </Switch>
      <Footer/>
    </div>
     
    </Router>
  );
}

export default App;
