import React, { Component } from "react";
import AClist from './components/AClist'
class App extends Component {

  render () {
    // console.log('render', this.state.count)
    return (
      <div className="App">
        <AClist />
      </div>
    );
  }
}

export default App;

