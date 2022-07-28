import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-expand-lg navbar-dark bg-dark">  
        <div className=" navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className=" nav-link btn btn-success m-1" to="/" >Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/families" >Family</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/members" >Family Members</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/family-groups" >Family Groups</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/properties" >Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/projects" >Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success m-1" to="/expenses" >Expenses</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
