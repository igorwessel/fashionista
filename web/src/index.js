import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { sagaMiddleware } from 'store';
import rootSaga from 'sagas';
import 'styles/global.css';
import App from 'App.jsx';

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
