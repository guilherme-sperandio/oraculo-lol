import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';


function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile/:summoner" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;