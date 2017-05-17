import axios from 'axios';
import * as types from './types';

export const loginUser = (user) => {

    const request = axios.post('/api/auth', user);

    return {
        type: types.LOGIN_USER,
        payload: request
    }
}

export const setCurrentUser = (user) => {
    return {
        type: types.SET_CURRENT_USER,
        payload: user
    }
}