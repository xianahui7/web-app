import React from "react";
import { NavLink } from "react-router-dom";
import {NavDropdown} from 'react-bootstrap';
import "../Styling/index.css";
//import {Button } from 'reactstrap';
//import {DropdownItem} from 'reactstrap';

function Navigation() {
  return (

    <header>
    <div className="navigation">
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            IoT: Automated Irrigation System
          </NavLink>
{/*           
          <NavDropdown title="Profile" id="nav-dropdown">
                <NavDropdown.Item href='/Add_Profile'>Add Profile</NavDropdown.Item> 
                <NavDropdown.Item href='/Update_Prof'>Update Profile</NavDropdown.Item> 
                <NavDropdown.Item href='/Remove_Prof'>Delete Profile</NavDropdown.Item> 
          </NavDropdown>

          <NavDropdown title="Plant" id="nav-dropdown">
                <NavDropdown.Item href='/Add_Plant'>Add Plant</NavDropdown.Item> 
                <NavDropdown.Item href='/Update_Plant'>Update Plant</NavDropdown.Item> 
                <NavDropdown.Item href='/Remove_Plant'>Delete Plant</NavDropdown.Item> 
          </NavDropdown> */}

          <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/MyPlant">
                    My Plant
                  </NavLink>
                </li>
                  
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/Analytics">
                    Analytics
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