import {combineReducers, applyMiddleware, createStore} from 'redux';
import promiseMiddleWare from 'redux-promise';
import StudentReducer from './reducers/studentReducers'

const rootReducers = combineReducers({
  students: StudentReducer
});

const store = createStore(
  rootReducers,
  applyMiddleware(promiseMiddleWare)
);

export default store;