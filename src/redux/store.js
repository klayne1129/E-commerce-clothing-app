import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//a function that gets a rootreducer and also the return value of applyMiddleWares

const store = createStore(rootReducer,applyMiddleware(...middlewares))


export default store;