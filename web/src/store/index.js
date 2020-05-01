import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';

export default ({ initialState } = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );

  return store;
};

const sagaMiddleware = createSagaMiddleware();

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`);
  console.log('LOGGER::will dispatch:', action);
  const nextAction = next(action);
  console.log('state:', getState());
  console.log('LOGGER::next action:', nextAction);
  console.groupEnd(`LOGGER->${action.type}`);
  return nextAction;
};

export { sagaMiddleware };
