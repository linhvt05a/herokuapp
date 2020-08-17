// import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { NODE_ENV } from '../../env';

import allReducer from './reducer';
import rootSaga from './saga';

export default function createStoreWithMiddleware() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array
  const middleware = [sagaMiddleware];

  const enhancers = compose(
    applyMiddleware(...middleware),
    // window.devToolsExtension && NODE_ENV === 'dev' ? window.devToolsExtension() : f => f
  );

  // Create a store with the reducers and middleware
  const store = createStore(allReducer, enhancers);

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(rootSaga);

  return store;
}