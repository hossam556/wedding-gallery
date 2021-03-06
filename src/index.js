import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore ,applyMiddleware,compose ,combineReducers} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import WIdeasReducer from './store/reducers/wIdeas';
import CategReducer from './store/reducers/categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cat: CategReducer ,
  WI : WIdeasReducer
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
