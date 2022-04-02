import { combineReducers } from 'redux';
import trafficSignalReducer from './trafficSignalReducer';

const rootReducer = combineReducers({ 
  signal: trafficSignalReducer,
});

export default rootReducer;
