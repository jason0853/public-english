import Signup from '../components/signup/Signup';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    username: state.auth.username
})

const SignupContainer = connect(mapStateToProps)(Signup);

export default SignupContainer;
