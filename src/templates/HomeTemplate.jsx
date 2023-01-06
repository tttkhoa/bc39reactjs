//Giống định nghĩa slide master trong ppt
import React, { Component } from "react";
import { NavLink,Outlet } from "react-router-dom";

export default class HomeTemplate extends Component {
  render() {
    return (
      <>
      {/* b4-navbar-background */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/home">
            ReactJS
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className={({isActive}) => isActive ? 'bg-white text-dark nav-link' : 'nav-link'}  to="/login" style={({isActive}) => isActive ? {fontWeight:'bold'} : {}}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'bg-white text-dark nav-link' : 'nav-link'} to="/register" style={({isActive}) => isActive ? {fontWeight:'bold'} : {}} >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'bg-white text-dark nav-link' : 'nav-link'} to="/user-management" style={({isActive}) => isActive ? {fontWeight:'bold'} : {}} >
                  user-management
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div style={{minHeight:'75vh'}}>
        <Outlet/>
        </div>
        <footer className="bg-dark p-3 text-center">Footer</footer>
      </>
    );
  }
}
