import { combineReducers } from 'redux';
import {tempReducer} from './tempReducer';
import { nextReducer } from './tempReducer';

const rootReducer = combineReducers({
    tempReducer,
    nextReducer
});

export default rootReducer;