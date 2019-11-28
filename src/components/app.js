import React, { useState } from 'react';
import New from './new';
import store from '../store/store';
import { Provider } from 'react-redux';

const App = ()=>{

    console.dir(store.getState())

    return (
        <Provider store={store}>            
            <New />
        </Provider>
    )
}

export default App;