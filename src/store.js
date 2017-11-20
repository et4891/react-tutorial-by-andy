import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import StudentReducer from './reducers/studentReducers'

const rootReducers = combineReducers({
  students: StudentReducer
});

const store = createStore(
  rootReducers,
  {},
  applyMiddleware(thunk)
);

export default store;