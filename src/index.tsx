import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Theme from './hoc/Theme'


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);