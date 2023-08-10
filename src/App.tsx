import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Banjos from './components/Banjos';
import Equipment from './components/Equipment';
import Events from './components/Events';
import Foundation from './components/Foundation';
import Home from './components/Home';
import Mandolins from './components/Mandolins';
import Prices from './components/Prices';

function App() {
  return (
    <body>
      <div className="App">
      <div className="Main">
        <Header/>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/Mandolins" Component={Mandolins}/>
          <Route path="/Banjos" Component={Banjos}/>
          <Route path="/Equipment" Component={Equipment}/>
          <Route path="/Prices" Component={Prices}/>
          <Route path="/Aboutus" Component={AboutUs}/>
          <Route path="/Events" Component={Events}/>
          <Route path="/Foundation" Component={Foundation}/>
        </Routes>
        
      </div>
    </div>
    </body>
    
  );
}

export default App;
