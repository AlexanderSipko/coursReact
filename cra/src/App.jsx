import React, { Component } from "react";

import './style/App.css'
import AClist from './components/AClist'

class App extends Component {

  state = {
    visibleList:true
  }

  render () {
    // console.log('render', this.state.count)
    return (
      <div className="App">
        
        <h1>React для современных веб-приложений</h1>
        <div className="ClassComponents">
          <h2 onClick={ () => console.log('a')  }>Классовые компоненты</h2>
            { this.state.visibleList ? <AClist /> : null }
        </div>
        
      </div>
    );
  }
}

export default App;

