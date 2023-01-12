import React, { Component } from "react";

class ADtimer extends Component {

    state = {
      time:0
    }

   secondsToHms = (d) => {
    //формирование часов минут и секунд на основании полученных данных

    d = Number(d);
    
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? (h < 9 ? `0${h}` : `${h}`) : "00";
    let mDisplay = m > 0 ? (m < 9 ? `0${m}` : `${m}`) : "00";
    let sDisplay = s > 0 ? (s < 9 ? `0${s}` : `${s}`) : "00";

    return `${hDisplay}:${mDisplay}:${sDisplay}`
}

  render () {
    return (
      <div className="ADtimer">
        { this.secondsToHms(this.state.time) }
        <p onClick={ () =>  this.setState({time:this.state.time+1}) }>+</p>
        сделать таймер, при нажатии стоп, данные сохраняются в Local
      </div>
    )
  }
}
 
export default ADtimer;
