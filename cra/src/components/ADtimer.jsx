import React, { Component } from "react";
import '../style/ADtimer.css'
class ADtimer extends Component {

  state = {
    statusButton:false,
    time:'00:01',
    timeCount:0
  }

  visualTime = (time) =>{
    if (time > 60) {
      return `01:${time}`
    } else {
      if (time < 10) {
        return `0${time}`
      } else {
        return `${time}`
      }
    }
  }

  handlStart = () => {
    this.setState({statusButton: !this.state.statusButton, time:'00:01' })
    this.state.statusButton ? this.timerStart() : this.timerStop();
  }

  handlReset = () => {
    this.setState({statusButton: false, time:'00:00'})
  }

  timerStart = () => {
    this.timerID = setInterval( () => {
      this.setState((prev) => this.setState({timeCount: prev.timeCount + 1 }))
    }, 100)
  }

  timerStop = () => {
    clearInterval(this.timerID)
  }

  render () {
    return (
      <div className="ADtimer">
        сделать таймер, при нажатии стоап, данные сохраняются в Local
        <ul>
          <li>- кнопки старт и стоп news sity</li>
          <li>- таймер можно остановит или продолжить его работу и если нужно то сбросить его</li>
          <li>- данные записывать в локал сторедж</li>
        </ul>
        <div className="classTimer">
            <h2 className="t--h2">TIMER</h2>
            <h3 className="t--h3">{ this.state.time } {this.visualTime(this.state.timeCount)}</h3>
            <button className="buttonStart"
              onClick={ this.handlStart }
            >{ this.state.statusButton ? 'Start' : 'Stop' }
            </button>
            <button
              className="buttonReset"
              onClick={ this.handlReset }
            >Reset</button>
        </div>
      </div>
    )
  }
}
 
export default ADtimer;
