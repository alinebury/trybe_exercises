import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import trafficSignalReducer from '../reducers/trafficSignalReducer';


const store = createStore(
  trafficSignalReducer,
  composeWithDevTools(),
);

export default store;