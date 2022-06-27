import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app.component';
import store from './store';
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {CustomProvider} from 'rsuite'
import ToasterProvider from './components/toasterProvider/toasterProvider.component';

import 'rsuite/dist/rsuite.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <CustomProvider theme='dark'>
      <BrowserRouter>
      <ToasterProvider>
        <App />
      </ToasterProvider>
      </BrowserRouter>
      </CustomProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
