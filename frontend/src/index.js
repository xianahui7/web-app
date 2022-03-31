//main entry point of app

import React from "react";
import ReactDOM from "react-dom";
import "../src/Styling/index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../src/WebpageComponents/Navigation";
import Footer from "../src/WebpageComponents/Footer";
import Home from "../src/WebPages/Home";
import Add_Plant from "../src/WebPages/Add_Plant";
import Add_Profile from "../src/WebPages/Add_Profile";
import MyPlants from "../src/WebPages/MyPlants";
import Update_Prof from "../src/WebPages/Update_Prof";
import Remove_Prof from "../src/WebPages/Remove_Prof";


import pp from "../src/WebPages/pp";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Add_Plant" element={<Add_Plant/>}/>
      <Route path="/Add_Profile" element={<Add_Profile/>}/>
      <Route path="/MyPlant" element={<MyPlants />} />
      <Route path="/Update_Prof" element={<Update_Prof />}/>
      <Route path="/Remove_Prof" element={<Remove_Prof />}/>
      <Route path="/pp" element={<pp />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();