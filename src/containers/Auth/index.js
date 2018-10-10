import React from 'react';

import { connect } from 'react-redux';

import Dashboard from '../Dashboard';
import Login from '../Login';

import * as selectors from './selectors';

// const AuthContainer = ({ login }) => (login ? <Dashboard /> : <Login />);
const AuthContainer = ({ login }) => <Dashboard />;

const mapStateToProps = (state, ownProps) => ({
    login: selectors.didLogin(state)
});

const Auth = connect(mapStateToProps)(AuthContainer);

export default Auth;