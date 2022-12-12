import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="flex items-center justify-between  bg-gray-400 p-2">
        <div class="lg:flex-grow pr-4 text-lg flex space-x-4 justify-end">
          <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 items-end"
            to="/"
            exact
          >
            Home
          </NavLink>
      
        </div>
      
    </nav>
  );
}

export default NavBar;
