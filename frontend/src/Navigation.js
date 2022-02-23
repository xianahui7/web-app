import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import pp from "./pp";
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
                <NavLink className="nav-link" to="/Add">
                  Add a Plant 
                </NavLink>
              </li>
              
                <NavLink className="nav-link" to="/MyPlants">
                  My Plants
      
                </NavLink>
                 
        </ul>  
        </div>
        </div>       
      </nav>
      </div>
      </header>
      );
        }

export default Navigation;