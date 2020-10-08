import { combineReducers, createStore } from 'redux';
import profilePageReducer from './profilePage-reducer';
import messagesPageReducer from './messagesPage-reducer';
import friendPageReducer from './friendPage-reducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    friendPage: friendPageReducer
});
let store = createStore(reducers);

export default store;