import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Dropdown } from 'semantic-ui-react';

const languageOptions = ['korea', 'English'];

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            language: '',
            errors: {},
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {} });
        this.props.createUser(this.state)
        .then(res => { 
            console.log('test');
        })
        .catch((err) => this.setState({ errors: err.response.data }))
    }

    render() {
        const options = languageOptions.map((value, i) => {
            return <option key={i}>{value}</option>
        })
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <div className="box">
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input 
                            type="password"
                            placeholder="Password Confirmation"
                            name="passwordConfirm"
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Language</label>
                        <select 
                            name="language"
                            value={this.state.language}
                            onChange={this.handleChange}>
                            <option value="" disabled>Select your language</option>
                            {options}
                        </select>
                    </div>
                    <Divider />
                    <Button primary fluid>Sign Up</Button>
                </div>
            </form>
        )
    }
}

export default SignupForm;