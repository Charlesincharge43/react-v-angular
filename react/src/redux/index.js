import { combineReducers } from 'redux';
import heroes from './heroes';
import messages from './messages';

export default combineReducers({ heroes, messages });