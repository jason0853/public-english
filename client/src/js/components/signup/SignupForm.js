import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Divider, Message } from 'semantic-ui-react';

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
            console.log(res);
        })
        .catch((err) => this.setState({ errors: err.response.data }))
    }

    render() {
        const { errors } = this.state;

        const options = languageOptions.map((value, i) => {
            return <option key={i}>{value}</option>
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <div className="box">
                    <div className={classnames('form-group', { error: errors.username  })}>
                        <label>Username</label>
                        <input 
                            type="text" 
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        {errors.username && <Message size="mini" color="red">{errors.username}</Message>}
                    </div>
                    <div className={classnames('form-group', { error: errors.email  })}>
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        {errors.email && <Message size="mini" color="red">{errors.email}</Message>}
                    </div>
                    <div className={classnames('form-group', { error: errors.password  })}>
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        {errors.password && <Message size="mini" color="red">{errors.password}</Message>}
                    </div>
                    <div className={classnames('form-group', { error: errors.passwordConfirm  })}>
                        <label>Password Confirmation</label>
                        <input 
                            type="password"
                            placeholder="Password Confirmation"
                            name="passwordConfirm"
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                        />
                        {errors.passwordConfirm && <Message size="mini" color="red">{errors.passwordConfirm}</Message>}
                    </div>
                    <div className={classnames('form-group', { error: errors.language  })}>
                        <label>Language</label>
                        <select 
                            name="language"
                            value={this.state.language}
                            onChange={this.handleChange}>
                            <option value="" disabled>Select your language</option>
                            {options}
                        </select>
                        {errors.language && <Message size="mini" color="red">{errors.language}</Message>}
                    </div>
                    <Divider />
                    <Button primary fluid>Sign Up</Button>
                </div>
            </form>
        )
    }
}

export default SignupForm;