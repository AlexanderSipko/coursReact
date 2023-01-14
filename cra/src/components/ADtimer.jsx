import React, { Component } from "react";
import '../style/ADtimer.css'
class ADtimer extends Component {
    // первая попытка самостоятельно собрать таймер
    state = {
      time: !localStorage.getItem('time') ? 0 : JSON.parse(localStorage.getItem('time')) ,
      statusButton:false,
      timeCount:0,
      time_write: !localStorage.getItem('list') ? JSON.stringify('[]') : JSON.parse(localStorage.getItem('list'))
      // time_write: JSON.parse(localStorage.getItem('list'))
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
    clearInterval(this.timerID);
    // console.log(this.secondsToHms(this.state.time));
    let arrTimerList = [...this.state.time_write, this.secondsToHms(this.state.time)]
    arrTimerList = arrTimerList.filter( item => item !== '[').filter( item => item !== ']')
    this.setState({time_write: arrTimerList });
    localStorage.setItem("time", this.state.time)
    localStorage.setItem("list", JSON.stringify(arrTimerList))
  }

  timerReset = () => {
    clearInterval(this.timerID);
    this.setState(this.setState({time: 0}));
    this.setState({time_write: [...this.state.time_write, '-- Reset --'] });
    localStorage.setItem("time", '0')
    localStorage.setItem("list", JSON.stringify([...this.state.time_write, '-- Reset --']))
  }

  clearLocalStoraje = () => {
    localStorage.setItem("time", '0')
    localStorage.setItem("list", JSON.stringify('[]'))
    this.setState({time_write: JSON.parse('[]') });
  }

  render () {
    return (
      <div className="ADtimer">
        <div className="classTimer">
            <h2 className="t--h2">TIMER</h2>
            <h3 className="t--h3">{ this.secondsToHms(this.state.time) }</h3>
            <p onClick={ () => this.clearLocalStoraje() }> удалить записи </p>
            <button className="buttonStart"
              onClick={ this.timerStart }
            >{ !this.state.statusButton ? 'Start' : 'Stop' }
            </button>
            <button
              className="buttonReset"
              onClick={ this.timerReset }
            >Reset</button>
            { this.state.time_write !== '[]' ? this.state.time_write.map( (item, index) => {
              return <p>{index+=1} - {item}</p>
            }) : '' }
        </div>
      </div>
    )
  }
}

class ADtimerSalfe extends Component {
  // первая попытка самостоятельно собрать таймер
  state = {
    time: 0,
    isCount:false,
  }

 secondsToHms = (d) => {
  //формирование часов минут и секунд на основании полученных данных
     // новыве данные в данном месте
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);

  let hDisplay = h > 0 ? (h < 10 ? `0${h}` : `${h}`) : "00";
  let mDisplay = m > 0 ? (m < 10 ? `0${m}` : `${m}`) : "00";
  let sDisplay = s > 0 ? (s < 10 ? `0${s}` : `${s}`) : "00";

  return `${hDisplay}:${mDisplay}:${sDisplay}`
}

componentDidMount() {
  const timeLocal = localStorage.getItem('timeNewSelf')

  if (timeLocal === undefined) {
    this.setState({time:JSON.parse(timeLocal)})
  }
}

componentDidUpdate() {
  localStorage.setItem('timeNewSelf', this.state.time)
}

componentWillUnmount() {
  clearInterval(this.timerID)
  this.setState({isCount:false})
}

handlerStart = () => {
  // заупускаем автообновление счетчика
  this.setState({isCount:true})
  this.timerID = setInterval(
    () => { this.setState({time:this.state.time+1}) }, 1000
  )
}

handlerStop = () => {
  clearInterval(this.timerID)
  this.setState({isCount:false})
}

handleReset = () => {
  clearInterval(this.timerID)
  this.setState({time:0, isCount:false})
}

render () {
  return (
    <div className="ADtimer">
      <div className="classTimer">
          <h2 className="t--h2">TIMER</h2>
          <h3 className="t--h3">{ this.secondsToHms(this.state.time) }</h3>
          <p onClick={ () => this.clearLocalStoraje() }> удалить записи </p>
          { !this.state.isCount ? (
            <button className="buttonStart" onClick={ this.handlerStart }>
              Start
            </button>) : (
            <button className="buttonStop" onClick={ this.handlerStop }>
              Stop
            </button>)
          }
          <button className="buttonReset" onClick={ this.handleReset }>
              Reset
          </button>
          
          {/* { this.state.time_write !== '[]' ? this.state.time_write.map( (item, index) => {
            return <p>{index+=1} - {item}</p>
          }) : '' } */}
      </div>
    </div>
  )
}
}

class ADtimerT extends Component {
  state = {
      count: 0,
      isCounting: false,
  };

  componentDidMount() {
    // получаем значение из локального хранилища если оно есть
    let userCount = localStorage.getItem('timeNew')
    if (userCount) {
      this.setState({count:JSON.parse(userCount)})
    }
  } 

  componentDidUpdate() {
    // каждый раз записываем значение переменной в локальное хранилище
    localStorage.setItem('timeNew', this.state.count)
  }

  componentWillUnmount() {
    // если пользователь ушел со страницы то мы останавливаем счетсик
    this.setState({isCounting:false})
    clearInterval(this.countId)
  }

  handleStart = () => {
    this.setState({isCounting:true})
    this.countId = setInterval(() => {
      this.setState(prev => ({count:prev.count+1}))
    }, 1000)
  }

  handleStop = () => {
    this.setState({isCounting:false})
    clearInterval(this.countId)
  }

  handleReset = () => {
    this.setState({count:0, isCounting:false})
    clearInterval(this.countId)
  }

  render() {
      return (
          <div className="App">
              <h1>React Timer</h1>
              <h3>{this.state.count}</h3>
              {!this.state.isCounting ? (
                  <button onClick={this.handleStart}>Start</button>
              ) : (
                  <button onClick={this.handleStop}>Stop</button>
              )}
              <button onClick={this.handleReset}>Reset</button>
          </div>
      );
  }
}
 
export {ADtimerSalfe};
