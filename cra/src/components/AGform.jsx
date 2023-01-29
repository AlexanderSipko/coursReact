import React from 'react';

// don't change the Component name "App"
class AGform extends React.Component {
  constructor() {
      // eslint-disable-next-line no-this-before-super
      super()
      this.state = {
        email: '',
        isAgreeWithTerms: false,
        isSubmit: false
    };
  }

  handlerChange = (event) => {
    this.setState({[event.target.name]:event.target.value, isSubmit: false})
  }

  handlerChecked = (event) => {
    this.setState({[event.target.name]:event.target.checked})
  }

//   checkEmail = (event) => {
//     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;

//     if (!regEx.test(this.state.email)) {
//         event.target.className = 'error'
//         alert('You can\'t write correct email')
//     } else {
//         event.target.className = ''
//     }
//     }

//     checkConditions = (event) => {
//     if (!event.target.checked) {
//         alert('You can\'t checked conditions')
//     }
//     }

    checkSendButton = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
        const isValidEmail = regEx.test(this.state.email)
        const isValidCondition = this.state.isAgreeWithTerms

        if (!isValidEmail) {
            alert('You email is not valid')
            return
        } 
        if (!isValidCondition) {
            alert('You can\'t check conditions')
            return
        }

        this.setState({
            email: '',
            isAgreeWithTerms: false,
            isSubmit: true
        })
    }
  
  
  render() {
    
    // TODO: implement component
    const { email, isAgreeWithTerms, isSubmit } = this.state;

        return (
            <div>
                <input
                    onChange={ this.handlerChange}
                    // onBlur={ this.checkEmail }
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                />
                <br />
                <label>
                    <input
                        onChange={this.handlerChecked}
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.checkSendButton}>Send</button>
                <p>{isSubmit? 'Вы успешно подписаны':''}</p>
            </div>
        );
  }
}


export {AGform}