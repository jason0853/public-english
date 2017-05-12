import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Divider, Message } from 'semantic-ui-react';
import validateInput from '../../helpers/validateInput';
import TextFieldGroup from '../common/TextFieldGroup';

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
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.createUser(this.state)
            .then(res => { 
                console.log(res);
            })
            .catch((err) => this.setState({ errors: err.response.data, isLoading: false }));
        }
    }

    render() {
        const { errors, isLoading } = this.state;

        const options = languageOptions.map((value, i) => {
            return <option key={i}>{value}</option>
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <div className="box">
                    <TextFieldGroup 
                        label="Username"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <TextFieldGroup 
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        error={errors.email}
                    />
                    <TextFieldGroup 
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <TextFieldGroup 
                        label="Password Confirm"
                        type="password"
                        placeholder="Password Confirm"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        error={errors.passwordConfirm}
                    />
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
                    <Button loading={isLoading} primary fluid>Sign Up</Button>
                </div>
            </form>
        )
    }
}

export default SignupForm;