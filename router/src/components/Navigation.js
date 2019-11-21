import React from "react"
import { NavLink } from "react-router-dom";

//NavLink is used to create a link for navigation

const Navigation = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navigation;