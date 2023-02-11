import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import StateContext from './context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>,
)
