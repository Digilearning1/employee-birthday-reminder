import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Empbirthday from './Empbirthday';
import Empdetails from './Empdetails';
import Home from './Home';

const App = () => {
    return (
        <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/empdetails" component={Empdetails} exact />
            <Route path="/empbirthday" component={Empbirthday} exact />
            <Redirect to="/" />
        </Switch>
    </main>
    )
}
export default App
