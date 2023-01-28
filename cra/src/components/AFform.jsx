import React from "react";



class AFform extends React.Component {

    state = {
        firstName: '',
    }

    handleChange = (event) => {
        this.setState({firstName:event.target.value})
    }

    render () {
        const {firstName} = this.state

        return (
            <div>
                <input
                onChange={ this.handleChange}
                type="text"
                name='FirstName'
                value={firstName}
                />
            </div>
        )
    }
}

export { AFform }