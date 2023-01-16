import React, { Component } from "react";
import AAplusMinus from './AAplusMinus'
import ABlifeCycle from './ABlifeCycle'
import {ADtimerSalfe} from './ADtimer'
import {AEarray} from './AEarray'

import '../style/AClist.css'

class AClist extends Component {

  handClick = (id_) => {
      this.setState.items.map((item) => 
        document.getElementById('app--' + item.key).style.display = 'none'
      )
      document.getElementById(id_).style.display = 'block'
      // document.querySelector('.list--close ').style.display = 'inline'   
    }


  render () {
    // console.log('render', this.state.count)
    this.setState = {
        items: [
            {key:'AAplusMinus', title:'1 - Плюс и минус (состояние) - AAplusMinus', app:<AAplusMinus />},
            {key:'ABlifeCycle', title:'2 - Жизненный цикл компонента - ABlifeCycle', app:<ABlifeCycle />},
            {key:'ADtimerSalfe', title:'3 - Таймер - ADtimerSalfe', app:<ADtimerSalfe />},
            // {key:'ADtimer', title:'4 - Таймер - ADtimer', app:<ADtimer />},
            // {key:'ADtimerT', title:'5 - Таймер - ADtimerT', app:<ADtimerT />},
            {key:'AEarray', title:'4 - Список - AEarray', app:<AEarray />}
        ]
    }
    return (
      <div className="AClist">
        <div className="AClist--id">
          
            { this.setState.items.map((item) => 
              
                <h3
                  key = {'app--' + item.key} 
                  className="AClist--id--h3"
                  id={item.key} 
                  onClick={ () => this.handClick('app--' + item.key) }
                >{item.title}
                  <div
                    style={{display: 'none'}}
                    id={'app--' + item.key}
                    className="AClist--block"
                  >
                  {item.app}
                  </div>
                </h3>
            )}
        </div>
      </div>
    );
  }
}
 
export default AClist;
