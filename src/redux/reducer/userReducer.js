const REGISTER_USER = 'REGISTER_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';

import {
    initialState
} from '../initialState/initialState';

export default (state = initialState, action) => {

    switch (action.type) {

        case REGISTER_USER:
            return Object.assign({}, {
                userDetails: action.response,
            })
        case REGISTER_ERROR:
            return Object.assign({}, {
                userDetails: action.err,
                registerationError: true
            })
        default:
            return state
    }
}
