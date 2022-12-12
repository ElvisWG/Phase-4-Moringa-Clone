import React from "react";
import { NavLink } from "react-router-dom";
import HackerLogo from "./HackerLogo.jpg";
import Footer from "./Footer"

function Home() {
  const styles = {
     backgroundImage: `url(${HackerLogo})`,
   
    margin: "1px",
     height: "150%",
  };

  return (
    <div>
      <div className=" bg-teal-300 text-lime-300 px-16 py-40 " style={styles}>
        <div className=" max-w-xl grid grid-cols-1 gap-9">
          <h2 className="text-xl uppercase font-bold ">HackerRank</h2>
          <h1 className="text-5xl ">
       Welcome To Moringa Hackerrank Clone
          </h1>
          <p className="text-lg">
          Welcome To Moringa Hackerrank Clone          </p>
          <div className="flex space-x-20 ">
            <NavLink
              className="bg-lime-500 py-3 px-6 text-lg rounded-md w-48"
              to="/register"
              exact
            >
             SignUp
            </NavLink>
            <NavLink
              className="bg-lime-500 py-3 px-6 text-lg rounded-md w-48"
              to="/login"
              exact
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
