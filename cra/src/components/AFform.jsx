import React from "react";
import '../style/AFform.css'

class AFform extends React.Component {

    state = {
        firstName: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
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
        const {firstName, email} = this.state

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
                <p>{firstName}</p>
            </div>
        )
    }
}

export { AFform }