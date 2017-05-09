import React from 'react';
import { Button, Divider, Select } from 'semantic-ui-react';

const SignupForm = () => {
    return (
        <form>
            <h2>Sign Up</h2>
            <div className="box">
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text" 
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label>Password Confirmation</label>
                    <input 
                        type="password"
                        placeholder="Password Confirmation" 
                    />
                </div>
                <div className="form-group">
                    <label>Language</label>
                    {/*<Select 
                        placeholder='Select your language' 
                        options={languageOptions}
                    />*/}
                </div>
                <Divider />
                <Button primary fluid>Sign Up</Button>
            </div>
        </form>
    );
};

export default SignupForm;