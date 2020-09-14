import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './dist/css/main.css'
import App from './App';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Provider store={store}><Route path='/' component={App}/></Provider>
  </Router>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
