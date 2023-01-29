import React from "react";
import '../style/AFform.css'

class AFform extends React.Component {

    state = {
        firstName: '',
        email: '',
        message: '',
        select: '0',
        subscription: false,
        gender: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleChangeCheckBox = (event) => {
        this.setState({[event.target.name]:event.target.checked})
    }

    validateName = (event) => {
        
        if (this.state.firstName.length < 7) {
            event.target.className = 'error'
            alert('You can\'t write name less when 7 letters')
        } else {
            event.target.className = ''
        }
    }

    validateEmail = (event) => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;

        if (!regEx.test(this.state.email)) {
            event.target.className = 'error'
            alert('You can\'t write correct email')
        } else {
            event.target.className = ''
        }
    }

    render () {
        const {firstName, email, message, select, subscription, gender} = this.state

        return (
            <div className="AFform">
                <input
                    onChange={ this.handleChange}
                    onBlur={ this.validateName}
                    type="text"
                    name='firstName'
                    value={firstName}
                />
                <input
                    onChange={ this.handleChange}
                    onBlur={ this.validateEmail}
                    type='email'
                    name='email'
                    value={email}
                />
                <p>name - {firstName === '' ? 'пусто' : firstName}</p>

                <br />
                <textarea
                    onChange={ this.handleChange}
                    name='message'
                    value={message} >
                </textarea>
                <p>m - {message === '' ? 'пусто' : message}</p>

                <select
                    onChange={ this.handleChange}
                    name="select"
                    value={select}>
                        <option value="0" disabled></option>
                        <option value="1 - options">1 - options</option>
                        <option value="2 - options">2 - options</option>
                        <option value="3 - options">3 - options</option>
                </select>

                <label>
                    <input 
                        onChange={this.handleChangeCheckBox}
                        type="checkbox"
                        name="subscription"
                        checked={subscription}/>
                    Subscription
                </label>
                <p>s - {select === '' ? 'пусто' : select}</p>

                <br />

                <input 
                    onChange={ this.handleChange} checked={gender === 'mail'}
                    type="radio" name='gender' value='mail' /> Mail
                <input 
                    onChange={ this.handleChange} checked={gender === 'female'} 
                    type="radio" name='gender' value='female' /> Female
                <p>r - {gender === '' ? 'пусто' : gender}</p>
            </div>
        ) 
    }
}

export { AFform }