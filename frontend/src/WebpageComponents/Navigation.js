import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/index.css";
import pp from "../WebPages/pp";
//import {Button } from 'reactstrap';
//import {DropdownItem} from 'reactstrap';

function Navigation() {
  return (

    <header>
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            IoT: Automated Irrigation System
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Add_Profile">
                  Add a Profile 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Update_Prof">
                  Update Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Add_Plant">
                  Add Plant
                </NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/MyPlant">
                  My Plant
                </NavLink>
              </li>
                 
        </ul>  
        </div>
        </div>       
      </nav>
      </div>
      </header>
      );
        }

export default Navigation;