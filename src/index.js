import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import '../src/styles/footer.css'
import '../src/styles/style.css'
import '../src/styles/main.css'
import '../src/styles/header.css'
import '../src/styles/coinList.css'
import '../src/styles/coin.css'
import '../src/styles/catalog.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
