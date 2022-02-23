import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer.js';

function App() { //stateless react component functional
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header> 
      
    <Footer/>
    </div>
  );//div is end of wrapper
}

export default App;
