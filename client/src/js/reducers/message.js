import * as types from '../actions/types';

const initialState = [];

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_SIGNUP_MESSAGE:
            return [
                ...state,
                {
                    type: action.payload.type,
                    text: action.payload.text
                }
            ]
        default: return state;
    }
};

export default message;