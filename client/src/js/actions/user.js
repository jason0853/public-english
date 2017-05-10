import axios from 'axios';
import * as types from './types';

export const createUser = (user) => {
    const request = axios.post('/api/user', user);

    return {
        type: types.CREATE_USER,
        payload: request
    };
}