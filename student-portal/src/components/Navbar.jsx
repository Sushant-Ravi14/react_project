import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/add">Add Student</NavLink>
      <NavLink to="/counter">Counter</NavLink>
    </nav>
  );
}

export default Navbar;