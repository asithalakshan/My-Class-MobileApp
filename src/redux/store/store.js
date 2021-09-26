import { createStore } from 'redux'
import reducer from '../reducers/index'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducer, 
    {},    
    );

export default store; 



