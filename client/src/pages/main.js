import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./About";
import Artist from "./Artist";
import Categories from "./Categories";
import Stub from "./Stub";

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Artist" component={Artist} />
        <Route path="/Categories" component={Categories} />
        <Route path="/Stub" component={Stub} />
    </Switch>
)

export default Main;