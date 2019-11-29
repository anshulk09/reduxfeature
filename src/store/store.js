import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { combineReducers } from 'redux';
import tempReducer, {nextReducer} from '../reducers/tempReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// store.replaceReducer(nextReducer);

const f = ()=>{
    return {
        type : "temp",
        payload : "for temp reducer"
    } 
}

store.dispatch(f())

export default store;