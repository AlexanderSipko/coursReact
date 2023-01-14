import React, { Component } from "react";
import AAplusMinus from './AAplusMinus'
import ABlifeCycle from './ABlifeCycle'
import {ADtimer, ADtimerSalfe, ADtimerT} from './ADtimer'

import '../style/AClist.css'

class AClist extends Component {

  handClick = (id_) => {
        let flag = document.getElementById(id_).style.display === 'block' ? true : false;

        this.setState.items.map((item) => document.getElementById('app--' + item.key).style.display = 'none')
        
        if (flag) {
          document.getElementById(id_).style.display = 'none'
        } else {
          document.getElementById(id_).style.display = 'block'
        }
        
    }

  render () {
    // console.log('render', this.state.count)
    this.setState = {
        items: [
            {key:'AAplusMinus', title:'1 - Плюс и минус (состояние) - AAplusMinus', app:<AAplusMinus />},
            {key:'ABlifeCycle', title:'2 - Жизненный цикл компонента - ABlifeCycle', app:<ABlifeCycle />},
            {key:'ADtimer', title:'3 - Таймер - ADtimer', app:<ADtimer />},
            {key:'ADtimerSalfe', title:'4 - Таймер - ADtimerSalfe', app:<ADtimerSalfe />},
            {key:'ADtimerT', title:'5 - Таймер - ADtimerT', app:<ADtimerT />},
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
