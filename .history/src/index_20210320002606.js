import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Card from "./Card";
ReactDOM.render(
    
    <>    
    <Router>
    <Switch>
                <Route exact path='/Project' component={Project} />
                </Switch>
    <Card/>
    </Router>
    </>,
    document.getElementById("root")
);