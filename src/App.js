
import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

export default class App extends Component {
  render() {
    // document.body.style.background = "gray";
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}

