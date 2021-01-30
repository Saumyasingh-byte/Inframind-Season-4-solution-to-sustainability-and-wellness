import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar/>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
