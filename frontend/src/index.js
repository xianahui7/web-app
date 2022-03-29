//main entry point of app

import React from "react";
import ReactDOM from "react-dom";
import "../src/Styling/index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../src/WebpageComponents/Navigation";
import Footer from "../src/WebpageComponents/Footer";
import Home from "../src/WebPages/Home";
import Add from "../src/WebPages/Add";
import MyPlants from "../src/WebPages/MyPlants";
import pp from "../src/WebPages/pp";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />}/>
      <Route path="/MyPlant" element={<MyPlants />} />
      <Route path="/pp" element={<pp />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();