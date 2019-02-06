import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import adminsReducer from './AdminsReducer';

export default combineReducers({
  auth: authReducer,
  admins: adminsReducer,
  users: usersReducer
});
