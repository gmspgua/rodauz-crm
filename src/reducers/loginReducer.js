import { SUCCESS_LOGIN } from '../actions';



const login = (state = '', action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return action.email
        default:
            return state
    }
}

export default login