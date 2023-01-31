import React from 'react';

// don't change the Component name "App"
class AHref extends React.Component {
  
  constructor() {
    super()
    this.nameRef = React.createRef();
    this.nameRefEmail = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handlerChange = () => {
    if (this.nameRef.current.value.length === 16) {
      this.nameRefEmail.current.focus();
      // this.nameRefEmail.current.value = ''
    } 
    //   else {
    //   this.nameRefEmail.current.value = this.nameRef.current.value
    // }
  }

  render() {
    return (
        <div>
            <input
            onChange={this.handlerChange}
            type="name"
            ref={this.nameRef}
            />

            <input
              type="email"
              ref={this.nameRefEmail}
            />
            {/* <p>{n}</p> */}
        </div>
    );
  }
}


export {AHref}