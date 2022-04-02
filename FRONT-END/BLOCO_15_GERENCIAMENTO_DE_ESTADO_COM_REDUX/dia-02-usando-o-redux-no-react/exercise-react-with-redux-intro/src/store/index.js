import { createStore } from 'redux';
import reducer from  '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;