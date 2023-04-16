import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { Provider } from 'react-redux';
import userStore from './components/App/store'
 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
