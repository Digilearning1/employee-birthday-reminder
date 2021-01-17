import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Navbar = () => {
    return (
        <div>
        <Link to="/"> Home </Link>
        <Link to="/empdetails"> Employee Details </Link>
        <Link to="/empbirthday"> Today Birthday </Link>
      </div>
    )
}

export default Navbar