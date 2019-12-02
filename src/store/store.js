import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { combineReducers } from 'redux';
import tempReducer, {nextReducer} from '../reducers/tempReducer';

function compose(...funcs) {
	console.info("$$$ compose function ")
  console.dir( funcs)
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

//applyMiddleware from redux/applyMiddleware.js
const applyMiddleware = function applyMiddleware(...middlewares) {
	//console.info("applyMiddleware")
  return  function (createStore) {
    return function (reducer, preloadedState, enhancer)  {
      const store = createStore(reducer, preloadedState, enhancer)
      let dispatch = store.dispatch
      let chain = []

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }

      chain = middlewares.map(middleware => {
      	console.info("~~~~~~middleware ")
     		console.dir( middleware)
        const middlewareReturn = middleware(middlewareAPI)
        console.info("~~~~~~middlewareReturn ")
     		console.dir( middlewareReturn)
      	return middlewareReturn
      })
      console.info("~~~chain ")
      console.dir( chain)
      // console.info("~~~store.dispatch ")
      // console.dir( store.dispatch)
      
      //dispatch = compose(...chain)(store.dispatch)
      let composedFunc = compose(...chain)
      console.info("~~~composedFunc ")
      console.dir( composedFunc)
      
      dispatch = composedFunc(store.dispatch)
      console.info("~~~new dispatch AFTER compose  i.e composedFunc RETURNED ")
      console.dir( dispatch)
      
      return {
        ...store,
        dispatch
      }
    }
  }
}

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'function') {
          console.dir(action)
        console.log("action is a function");
        return action(dispatch, getState, extraArgument);
      }
  
      return next(action);
    };
  }
  
  const thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.replaceReducer(nextReducer);

// const f = () => (dispatch)=>{
//     return dispatch({
//         type : "temp",
//         payload : "for temp reducer"
//     }) 
// }

// f()(store.dispatch)



export default store;