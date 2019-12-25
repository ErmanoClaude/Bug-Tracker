import { combineReducers } from 'redux';
import projectReducer from './projectReducer.js'

export default combineReducers({
  project:projectReducer
});