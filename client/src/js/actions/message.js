import * as types from './types';

export const showSignupMessage = (message) => {
    return {
        type: types.SHOW_SIGNUP_MESSAGE,
        payload: message
    };
};