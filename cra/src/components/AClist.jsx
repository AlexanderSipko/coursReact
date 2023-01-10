import React, { Component } from "react";
import AAplusMinus from './AAplusMinus'
import ABlifeCycle from './ABlifeCycle'
import '../style/AClist.css'

class AClist extends Component {

  handClick = (id_) => {
        this.setState.items.map((item) => document.getElementById('app--' + item.key).style.display = 'none')
        document.getElementById(id_).style.display = 'block'
    }

  render () {
    // console.log('render', this.state.count)
    this.setState = {
        items: [
            {key:'AAplusMinus', title:'1 - Плюс и минус (состояние) - AAplusMinus', app:<AAplusMinus />},
            {key:'ABlifeCycle', title:'2 - Жизненный цикл компонента - ABlifeCycle', app:<ABlifeCycle />}
        ]
    }
    return (
      <div className="AClist">
        <div className="AClist--id">
            { this.setState.items.map((item) => 
                <h3
                  className="AClist--id--h3"
                  id={item.key} 
                  onClick={ () => this.handClick('app--' + item.key) }
                >{item.title}
                  <div
                    style={{display: 'none'}}
                    id={'app--' + item.key}
                    className="AClist--block"
                  >{item.app}
                  </div>
                </h3>
            )}
        </div>
      </div>
    );
  }
}
 
export default AClist;
