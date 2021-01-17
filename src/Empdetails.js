import React from "react";
import Empdata_all from "./Empdata_all";
import data from "./data";
import { Link } from "react-router-dom";

const Empdetails = () => {
  return (
    <main>
      <section className="container">
        <h3> Employee Birthday Details</h3>
        <Empdata_all people={data} />
        <Link to="/empbirthday" style={{textAlign: "center"}}>Today Birthday</Link>
      </section>
    </main> 
  );
};

export default Empdetails;
