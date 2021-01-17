import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
    return (
        <main>
        <section className="container" style={{textAlign: "center"}}>
            <h3> Employee Birthday</h3>
            <Link to="/empdetails">Emplyee Details</Link>
            <Link to="/empbirthday">Today Birthday</Link>
    </section>
    </main>
    )
}
export default Home
