import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import issLocation from '../reducers/issLocation';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({ issLocation, });
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('store: ', store);
export default store

