import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
// import Navbar from './Navba';
import Empbirthday from './Empbirthday';
import Empdetails from './Empdetails';
import Error from './Error';
import Home from './Home';

const App = () => {
    const [background, setBackground] = useState("#ffffff")
    return (
        <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/empdetails" component={Empdetails} exact />
            <Route path="/empbirthday" component={Empbirthday} exact />
            <Route component={Error} />
        </Switch>
        {/* <Navbar /> */}
        {/* <button style={{background}} onClick={()=>setBackground('#25bb32')}>change color</button> */}
    </main>
    )
}

export default App
