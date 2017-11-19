import { combineReducers, createStore } from 'redux';
import StudentReducer from './reducers/studentReducers'

const rootReducers = combineReducers({
    students: StudentReducer
});

const store = createStore(rootReducers);
