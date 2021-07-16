import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import Theme from './hoc/Theme'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Theme>
          <App />
        </Theme>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);