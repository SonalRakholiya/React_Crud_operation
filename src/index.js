import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import App from './App';
import './index.css';
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
);

