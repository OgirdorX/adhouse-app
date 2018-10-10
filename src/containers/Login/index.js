import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as api from '../../api';

import LoginView from '../../components/LoginView';

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            doLogin: (user, pass) => api.doLogin(user, pass)
        },
        dispatch
    );

const Login = connect(
    null,
    mapDispatchToProps
)(LoginView);

export default Login;