import React from "react";
import Empdata from "./Empdata";
import data from './data';
import { Link } from "react-router-dom";

const Empbirthday = () => {
    return (
    <main>
      <section className="container">
        <h3> Today Birthday </h3>
        <Empdata people={data} />
        <Link to="/empdetails" style={{textAlign:"center"}}>Emplyee Details</Link>
      </section>
    </main>
  );
};

export default Empbirthday;
