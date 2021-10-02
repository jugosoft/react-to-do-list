import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log('MiddleWare', store.getState().PerfectCounter.counter, action);
      return next(action);
    }
  }
}

// Глобальный стор для приложения
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

// Наше приложение
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root')
);
