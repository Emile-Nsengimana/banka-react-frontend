import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';

const middleware = [thunk];
const initialSate={};

const store = createStore(
  rootReducer,
  initialSate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
