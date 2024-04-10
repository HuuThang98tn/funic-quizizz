import { combineReducers } from 'redux';
import soundReducer from './soundReducer';
import isLoadingReducer from './isLoadingReducer';
import isPayReducer from './isPayReducer';

export default combineReducers({
    soundReducer: soundReducer,
    isLoadingReducer: isLoadingReducer,
    isPayReducer: isPayReducer

});