import React, { Component } from "react";


class AEarray extends Component {

  state = {
    posts: [
      {id:'js-1', name:'JS Basics'},
      {id:'js-2', name:'JS Advanced'},
      {id:'js-3', name:'React JS'},
    ]
  }

  render () {
    return (
      <div className="div">
        <h1>I created this node </h1>
        <ul>
          { this.state.posts.map( (item) => (
            <li key={ item.id }>{ item.name }</li>
          )) }
        </ul>
        
      </div>
    )
  }
}


export { AEarray }