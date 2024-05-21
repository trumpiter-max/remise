// src/reducers/index.js
import { combineReducers } from 'redux';
import notificationSlide from '../NotificationSlice/notificationSlice';

const rootReducer = combineReducers({
notifications: notificationSlide,
// Các reducer khác (nếu có) sẽ được thêm vào đây
});

export default rootReducer;