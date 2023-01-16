import React, { Component } from "react";
import { Posts } from './posts/Posts'
class AEarray extends Component {

  state = {
    posts: [
      {id:'js-1', name:'JS Basics'},
      {id:'js-2', name:'JS Advanced'},
      {id:'js-3', name:'React JS'},
    ],
    isHandle:'No handle',
    idPost:'Функция -- вызвана в дочернем элементе'
  }

  handleSomething = (props) => {
    this.state.isHandle === 'No handle' ? (
      this.setState({isHandle:'Handle', idPost:props})
    ) : (
      this.setState({isHandle:'No handle', idPost:props})
    )
  }

  render () {
    return (
      <div className="div">
        <h1>I created this node { this.state.isHandle } -- { this.state.idPost }</h1>
        <ul>
          { this.state.posts.map( (item) => (
            <li key={ item.id }>{ item.name }</li>
          )) }
        </ul>

        <Posts posts={this.state.posts} cbHandler={ this.handleSomething }/>

      </div>
    )
  }
}


export { AEarray }