import Login from '../components/login/Login';
import { connect } from 'react-redux';

import { loginUser } from '../actions/login';

const LoginContainer = connect(null, { loginUser })(Login);

export default LoginContainer;