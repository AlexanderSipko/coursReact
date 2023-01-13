import React, { Component } from "react";
import '../style/ADtimer.css'
class ADtimer extends Component {

    state = {
      time:0,
      statusButton:false,
      timeCount:0,
      time_write: []
    }

   secondsToHms = (d) => {
    //формирование часов минут и секунд на основании полученных данных
    
       // новыве данные в данном месте
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? (h < 9 ? `0${h}` : `${h}`) : "00";
    let mDisplay = m > 0 ? (m < 9 ? `0${m}` : `${m}`) : "00";
    let sDisplay = s > 0 ? (s < 9 ? `0${s}` : `${s}`) : "00";

    return `${hDisplay}:${mDisplay}:${sDisplay}`
}

  timerStart = () => {
    if (this.state.statusButton) {
      this.timerStop();
      this.setState({statusButton:false });
    } else {
      this.setState({statusButton:true })
    }
      
    if (!this.state.statusButton) {
      this.timerID = setInterval( () => {
        this.setState((prev) => this.setState({time: prev.time + 1}))
      }, 100)
    }
    
  }

  timerStop = () => {
    clearInterval(this.timerID)
    console.log(this.secondsToHms(this.state.time))
    this.setState({time_write: [...this.state.time_write, this.secondsToHms(this.state.time)] })
  }

  timerReset = () => {
    clearInterval(this.timerID)
    this.setState(this.setState({time: 0}))
    this.setState({time_write: [...this.state.time_write, '-- Reset --'] })
  }

  render () {
    return (
      <div className="ADtimer">
        <div className="classTimer">
            <h2 className="t--h2">TIMER</h2>
            <h3 className="t--h3">{ this.secondsToHms(this.state.time) }</h3>
            <p onClick={ () =>  this.setState({time:this.state.time+1}) }>+</p>
            <button className="buttonStart"
              onClick={ this.timerStart }
            >{ !this.state.statusButton ? 'Start' : 'Stop' }
            </button>
            <button
              className="buttonReset"
              onClick={ this.timerReset }
            >Reset</button>
            { this.state.time_write.map( (item, index) => {
              return <p>{index+=1} - {item}</p>
            }) }
        </div>
      </div>
    )
  }
}
 
export default ADtimer;
