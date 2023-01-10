import './style/app.css'
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

  colorText = (count) => {
    let colorStyle = ''
    count < 1 ? colorStyle='red':colorStyle='green'
    return colorStyle
  }


  render () {
    console.log('render', this.state.count);
    return (
      <div className="App" >
        <span className='title'>Счетчик прибавления значения</span>
        <button onClick={ this.handleMinusCount }> - </button>
          <span className='app--count' style={{color:this.colorText(this.state.count)}}>
            {this.state.count}
          </span>
        <button onClick={ this.handleAddCount }> + </button>
        
      </div>
    );
  }
}
 
export default App;

