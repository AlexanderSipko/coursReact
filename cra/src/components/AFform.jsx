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

    render () {
        const {firstName, email} = this.state

        return (
            <div className="AFform">
                <input
                onChange={ this.handleChange}
                type="text"
                name='firstName'
                value={firstName}
                />
                <input
                onChange={ this.handleChange}
                type='email'
                name='email'
                value={email}
                />
            </div>
        )
    }
}

export { AFform }