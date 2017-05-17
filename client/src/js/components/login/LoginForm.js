import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Message } from 'semantic-ui-react';
import jwtDecode from 'jwt-decode';
import validateInput from '../../helpers/login';
import setAuthorizationToken from '../../helpers/setAuthorizationToken';
import TextFieldGroup from '../common/TextFieldGroup';

class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
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
            this.props.loginUser(this.state)
            .then(res => {
                const token = res.value.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                console.log(jwtDecode(token));
                this.props.history.push('/');
            })
            .catch(err => this.setState({ errors: err.response.data.errors, isLoading: false }));
        }

    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                {errors.form && <Message negative content={errors.form} size="mini" />}
                <div className="box">
                    <TextFieldGroup 
                        label="Username / Email"
                        placeholder="Username / Email"
                        name="identifier"
                        value={identifier}
                        onChange={this.handleChange}
                        error={errors.identifier}
                    />
                    <TextFieldGroup 
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <Divider />
                    <Button loading={isLoading} primary fluid>Login</Button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired
}

export default LoginForm;