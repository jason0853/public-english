import Signup from '../components/signup/Signup';
import { connect } from 'react-redux';

import { createUser } from '../actions/user';
import { showSignupMessage } from '../actions/message';

const SignupContainer = connect(null, { createUser, showSignupMessage })(Signup);

export default SignupContainer;
