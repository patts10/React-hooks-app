import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="collapse navbar-collapse flex flex-row items-center"
          id="navbarSupportedContent1"
        >
          <Link className="text-xl text-white pr-2 font-semibold" to="/">
            useContext
          </Link>
          <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => 'nav-item ' + (isActive ? 'active' : 'opacity-60 hover:opacity-90 focus:opacity-80 p-0')}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink 
                className={({ isActive }) => 'nav-item ' + (isActive ? 'active' : 'opacity-60 hover:opacity-90 focus:opacity-80 p-0')}
                to='/login'
              >
                  Login
              </NavLink> 
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => 'nav-item ' + (isActive ? 'active' : 'opacity-60 hover:opacity-90 focus:opacity-80 p-0')}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
