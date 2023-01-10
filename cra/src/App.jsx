import './style/app.css'
import React, { Component } from "react";


class App extends Component {

  state = { 
    count:0,
    posts: [],
    loadingPosts: true,
    comments: [],
    loadingComments: undefined,
  };

  handleAddCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1, loadingComments: undefined}))
  }

  handleMinusCount = () => {
    this.setState((prevState) => ({count: prevState.count - 1, loadingComments: undefined}))
  }

  colorText = (count) => {
    let colorStyle = ''
    count < 1 ? colorStyle='red':colorStyle='green'
    return colorStyle
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(respons => respons.json())
      .then(date => this.setState({posts:date, loadingPosts:false}))
    
    console.log('componentDidMount', `${this.state.posts.length} -- ${new Date()}`)

    this.timeId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(respons => respons.json())
      .then(date => this.setState({comments:date, loadingComments:`${new Date()}`}))
    }, 10000)
    console.log('componentDidUpdate', `${this.state.comments.length} -- ${new Date()}`)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', `${this.state.comments.length} -- ${new Date()}`)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
    console.log('componentWillUnmount', `${this.state.posts.length} -- ${new Date()}`)
    console.log('componentWillUnmount', `${this.state.comments.length} -- ${new Date()}`)
  }

  render () {
    // console.log('render', this.state.count)
    return (
      <div className="App">
        <span className='title'>Счетчик прибавления значения</span>
        <button onClick={ this.handleMinusCount }
        > - </button>
          <span style={{color:this.colorText(this.state.count)}}>
            {this.state.count}
          </span>
        <button onClick={ this.handleAddCount }
        > + </button>
        
        {this.state.loadingPosts ? <h3>:Loding posts</h3> : <h3>{this.state.posts.length} was loading</h3>}
        {!this.state.loadingComments ? <h3>:Loding comments</h3> : <h3>{this.state.comments.length} was loading {this.state.loadingComments}</h3>}
      </div>
    );
  }
}
 
export default App;
