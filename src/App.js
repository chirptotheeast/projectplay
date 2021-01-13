import React, { Component } from 'react'
import Example from "./Example.js"
import "./App.css";
import Music from "./Music.js"
import Color from "./Components/Color.js"
import Sound from "./Components/Sound.js"
import Jiggle from "./Components/jigglebutton.js"


export default class App extends Component {

  
  render() {
    return (
      <div className="App">
        Let's Play!
        <div>
          <Example />
          <Music />
          <div>  <Sound /></div>
          <Color />
          <Jiggle />
        </div>
      </div>
    );
  }
}
