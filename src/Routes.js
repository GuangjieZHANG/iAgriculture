import React from 'react';
import Dashboard from "./page/Dashboard";
import SignIn from "./page/SignIn";
import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";


const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={SignIn}></Route>
            </Switch>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}></Route>
            </Switch>
        </HashRouter>
    )
};

export default Routes;
