import React, { Component } from "react";

class App extends Component {

  state = { 
    count: 0
  };

  handleAddCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleMinusCount = () => {
    this.setState((prevState) => ({count: prevState.count - 1}))
  }

  render () {
    return (
      <div className="App">
        <span>Hello from react</span>
        <button onClick={ this.handleMinusCount }>minus ... - </button>
          <span>{ this.state.count }</span>
        <button onClick={ this.handleAddCount }>add ... + </button>
        
      </div>
    );
  }
}
 
export default App;
