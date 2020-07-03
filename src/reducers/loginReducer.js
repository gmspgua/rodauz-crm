import { SUCCESS_LOGIN, LOGOUT } from '../actions';



const login = (state = '', action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return {
                email: action.user.email,
                logged: true
            }
        case LOGOUT:
            return {
                ...state,
                logged: false
            }
        default:
            return state
    }
}

export default login