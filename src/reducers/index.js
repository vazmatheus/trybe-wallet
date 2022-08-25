import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const Reducer = combineReducers({ user, wallet });

export default Reducer;
