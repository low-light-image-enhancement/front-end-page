import { combineReducers } from 'redux';
import imageReducer from './imageReducer'
import sidebarReducer from './sidebarReducer';

export default combineReducers({
    image: imageReducer,
    sidebar: sidebarReducer
})