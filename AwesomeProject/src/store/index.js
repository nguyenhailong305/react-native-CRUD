import { configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
})
sagaMiddleware.run(rootSaga)
export default store;       