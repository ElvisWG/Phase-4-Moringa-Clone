import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <li>
        {/* <img src={require("./Remy.png")} className="img" alt="" /> */}

        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/registerPage" exact>
          RegisterPage
        </NavLink>
        <NavLink className="nav-link" to="/studentList" exact>
          StudentList
        </NavLink>
        <NavLink className="nav-link" to="/FeedBack" exact>
          FeedBack
        </NavLink>
      </li>
    </div>
  );
}

export default NavBar;
