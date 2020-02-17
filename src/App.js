import React from 'react';
import './App.css';
import SignIn from "./page/SignIn";
import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <div className="App">
        <HashRouter >
            <Switch>
                <Route exact path="/" component={SignIn}></Route>
            </Switch>
            <Switch>
                <Route path="/dashboard" component={Dashboard}></Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
