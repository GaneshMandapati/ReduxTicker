import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import 'bootstrap-css-only/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

