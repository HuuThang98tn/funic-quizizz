import { combineReducers } from 'redux';
import soundReducer from './soundReducer';
import isLoadingReducer from './isLoadingReducer';
export default combineReducers({
    soundReducer: soundReducer,
    isLoadingReducer: isLoadingReducer
});