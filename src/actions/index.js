import { useParams } from "react-router";

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const successLogin = user => ({
    type: SUCCESS_LOGIN,
    user
});


export const LOGOUT = 'LOGOUT';
export const logout = user => ({
    type: LOGOUT,
    user
});
