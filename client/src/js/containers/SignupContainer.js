import Signup from '../components/signup/Signup';
import { connect } from 'react-redux';

import { createUser } from '../actions/user';

const SignupContainer = connect(null, { createUser })(Signup);

export default SignupContainer;
