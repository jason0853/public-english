import { Map, List } from 'immutable';
import isEmpty from 'lodash/isEmpty';
import * as types from '../actions/types';

const initialState = Map({
    isAuthenticated: false,
    user: Map({})
});

const auth = (state = initialState, action = {}) => {
    const isAuthenticated = state.get('isAuthenticated');
    const user = state.get('user');

    switch(action.type) {
    
        case types.SET_CURRENT_USER:
            return state.set('isAuthenticated', !isEmpty(action.payload))
                        .set('user', action.payload);
        default: return state;
    }
};

export default auth;