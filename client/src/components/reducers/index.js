// src/reducers/index.js
import { combineReducers } from 'redux';
import notificationSlide from '../NotificationSlice/notificationSlice';

const rootReducer = combineReducers({
notifications: notificationSlide,

});

export default rootReducer;