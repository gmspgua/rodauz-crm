import { combineReducers } from 'redux';

import login from './loginReducer';


const rootReducer = combineReducers({
    user: login,
});


export default rootReducer;
