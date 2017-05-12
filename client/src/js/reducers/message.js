import { Map, List } from 'immutable';
import shortid from 'shortid';
import * as types from '../actions/types';

const initialState = List([]);

const message = (state = initialState, action) => {

    const message = state;

    switch(action.type) {
        case types.SHOW_SIGNUP_MESSAGE:
            return state.push(Map({
                id: shortid.generate(),
                type: action.payload.type,
                text: action.payload.text
            }));
        default: 
            return state;
    }
};

export default message;