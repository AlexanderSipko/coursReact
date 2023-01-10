import React, { Component } from "react";
import AAplusMinus from './AAplusMinus'
import ABlifeCycle from './ABlifeCycle'
import '../style/AClist.css'

class AClist extends Component {

    nandClick = (id_) => {
        this.setState.items.map((item) => document.getElementById('app--' + item.key).style.display = 'none')
        document.getElementById(id_).style.display = 'block'
    }

  render () {
    // console.log('render', this.state.count)
    this.setState = {
        items: [
            {key:'AAplusMinus', app:<AAplusMinus />},
            {key:'ABlifeCycle', app:<ABlifeCycle />}
        ]
    }
    return (
      <div className="AClist">
        <div className="AClist--id">
            { this.setState.items.map((item) => 
                <h3 id={item.key}  onClick={ () => this.nandClick('app--' + item.key) }>{item.key}
                    <div style={{display: 'none'}} id={'app--' + item.key} className="AClist--block">{item.app}</div>
                </h3>
            )}
        </div>
      </div>
    );
  }
}
 
export default AClist;
