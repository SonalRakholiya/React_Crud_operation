import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './history'
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import MainRouter from './Router/mainRouter';

function App() {
  return (
    <Router history={history}>
      <MainRouter />
      <ToastContainer autoClose={1500} />
    </Router>
  );
}
export default App;
