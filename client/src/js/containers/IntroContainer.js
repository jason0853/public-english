import Intro from '../components/intro/Intro';
import { connect } from 'react-redux';

import { setCurrentUser } from '../actions/auth';

const mapStateToProps = (state) => ({
    message: state.message,
    auth: state.auth
});

const IntroContainer = connect(mapStateToProps, { setCurrentUser })(Intro);

export default IntroContainer;