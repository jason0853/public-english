import Login from '../components/login/Login';
import { connect } from 'react-redux';

import { loginUser, setCurrentUser } from '../actions/auth';

const LoginContainer = connect(null, { loginUser, setCurrentUser })(Login);

export default LoginContainer;