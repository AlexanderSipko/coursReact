import React from 'react';

// don't change the Component name "App"
class AIunControl extends React.Component {
  
  constructor(props) {
    super()

    this.state = {
      error:'',
      successfulText:''
    }

    this.FirstName = React.createRef();
    this.Email = React.createRef();
  }

  handlerName = () => {
    // focus on element when this note has been more then 12 letters
    const FirstName = this.FirstName.current.value
    if (FirstName.length >= 12) {
      this.Email.current.focus()
    }
  }

  handlerSubmit = (event) => {
    // actions then users push the submit button
    event.preventDefault();
    const FirstName = this.FirstName.current.value
    const Email = this.Email.current.value
    this.setState({error:'', successfulText:''})

    // validator each fields in forms
    if (FirstName.length < 5) {
      this.setState({error:'слишком короткое имя, допускается более от 5 символов'})
      return
    }
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    const isValidEmail = regEx.test(Email)

    if (!isValidEmail) {
      this.setState({error:'это не похоже на email'})
      return
    }

    // if all fields in form inputted correct, we can push all information on server,
    // but now we simulate this actions
    this.setState({successfulText:'super, вы успешно прошли регистрацию'})
  }
  
  render() {

    return (
        <div>
          <form action="get" onSubmit={this.handlerSubmit} >
            <input onChange={this.handlerName} type="text" name='FirstName' ref={this.FirstName} />
            <input type="text" name='Email' ref={this.Email} />
            <button>Submit</button>
          </form>

          {/* TODO i think this pies of code can be clearer and smarter */}
          {this.state.error === ''? '': <h2>Error: {this.state.error}</h2>}
          {this.state.successfulText === ''? '': <h2>Successful: {this.state.successfulText}</h2>}
        </div>
    );
  }
}


export {AIunControl}