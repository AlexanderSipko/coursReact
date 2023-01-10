import '../style/PlusMinus.css'
import React, { Component } from "react";


class AAplusMinus extends Component {

  state = { 
    count:0,
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
    return (
      <div className="PlusMinus">
        <span className='title'>Счетчик прибавления значения</span>
        <button onClick={ this.handleMinusCount }
        > - </button>
          <span style={{color:this.colorText(this.state.count)}}>
            {this.state.count}
          </span>
        <button onClick={ this.handleAddCount }
        > + </button>
        </div>
    );
  }
}
 
export default AAplusMinus;
