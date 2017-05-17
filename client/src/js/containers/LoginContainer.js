import Login from '../components/login/Login';
import { connect } from 'react-redux';

import { loginUser } from '../actions/auth';

const LoginContainer = connect(null, { loginUser })(Login);

export default LoginContainer;