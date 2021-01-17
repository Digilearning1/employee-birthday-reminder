import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Empbirthday from './Empbirthday';
import Empdetails from './Empdetails';
import Error from './Error';
import Home from './Home';

const App = () => {
    return (
        <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/empdetails" component={Empdetails} exact />
            <Route path="/empbirthday" component={Empbirthday} exact />
            <Route component={Error} />
        </Switch>
    </main>
    )
}
export default App
