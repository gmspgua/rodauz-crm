import { SUCCESS_LOGIN } from '../actions';

const INITIAL_STATE = {
    authentication: false
}

const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return [
                {
                    authentication: action.authentication

                }
            ]
        default:
            return state
    }
}

export default login