import Signup from '../components/signup/Signup';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    auth: 'test'
})

const SignupContainer = connect(mapStateToProps)(Signup);

export default SignupContainer;
