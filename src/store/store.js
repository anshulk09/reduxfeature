import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { combineReducers } from 'redux';
import tempReducer from '../reducers/tempReducer';

const store = createStore(()=>{
    return combineReducers({tempReducer})
});

export default store;