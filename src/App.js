import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Background">
        <div className="App">
          <div className="Header">
            <img src="./images/ironhack-logo.svg"></img>
            <img src="./images/menu-top.svg"></img>
          </div>
          <div className="Textcontainer" >
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn how to use the most popular front-end library, and become a super Ninja developer</p>
            <button className="Button" type="button">Awesome</button>
          </div>
        </div>
        <div className="FourContainers">
          <img src="./images/icon1.png"></img>
          <img src="./images/icon2.png"></img>
          <img src="./images/icon3.png"></img>
          <img src="./images/icon4.png"></img>
        </div>
        </div>
    );
  }
}

export default App;
