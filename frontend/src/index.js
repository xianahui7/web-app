//main entry point of app

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import Add from "./Add";
import MyPlants from "./MyPlants";
import pp from "./pp";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />}/>
      <Route path="/MyPlants" element={<MyPlants />} />
      <Route path="/pp" element={<pp />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();