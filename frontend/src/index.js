//main entry point of app

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Styling/index.css";
import "../src/Styling/table.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./WebpageComponents/Navigation";
import Footer from "../src/WebpageComponents/Footer";
import Home from "../src/WebPages/Home";
import Analytics from "../src/WebPages/Analytics";
import MyPlant from "../src/WebPages/MyPlant";
// import Add_Plant from "../src/WebPages/Add_Plant";
// import Add_Profile from "../src/WebPages/Add_Profile";
// import Update_Prof from "../src/WebPages/Update_Prof";
// import Remove_Prof from "../src/WebPages/Remove_Prof";
// import Update_Plant from "../src/WebPages/Update_Plant";
// import Remove_Plant from "../src/WebPages/Remove_Plant";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Add_Plant" element={<Add_Plant/>}/>
      <Route path="/Add_Profile" element={<Add_Profile/>}/> */}
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/MyPlant" element={<MyPlant />} />
      {/* <Route path="/Update_Plant" element={<Update_Plant />}/>
      <Route path="/Update_Prof" element={<Update_Prof />}/>
      <Route path="/Remove_Prof" element={<Remove_Prof />}/>
      <Route path="/Remove_Plant" element={<Remove_Plant />}/> */}
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById("root")
);

//serviceWorker.unregister();