/**
 * Created by Administrator on 2018/10/7 0007.
 */
import { createStore, applyMiddleware  } from 'redux';
import  reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(mySaga);
export default store;