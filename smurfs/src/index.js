import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
//redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './store/reducer/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//create store
const store = createStore(reducer, applyMiddleware(thunk, logger))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
