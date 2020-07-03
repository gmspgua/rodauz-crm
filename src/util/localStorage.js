import { generateToken } from './generateJWT';

var ls = require('local-storage');


export const setLocalStorage = () => {
    const token = generateToken(true);
    ls.set('axrs', token);
}

export const getLocalStorage = () => {
    return ls.get('axrs');

}

export const removeLocalStorage = () => {
    ls.remove('axrs');
}