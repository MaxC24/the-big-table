import React, { Component } from 'react';
import './App.css';
import Board from "./Board";
import Controller from "./Controller";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 20,
      height: 20
    }
    this.setWH = this.setWH.bind(this);
  }

  setWH(w, h){
    this.setState({
      width: w,
      height: h
    })
  }

  render() {
    return ( 
      <div>
        width <input />
        height <input />
        <Controller setWH={ this.setWH } />
        <Board width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default App;
