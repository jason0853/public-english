import Intro from '../components/intro/Intro';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    message: state.message
});

const IntroContainer = connect(mapStateToProps)(Intro);

export default IntroContainer;