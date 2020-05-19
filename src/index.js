 import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom";
// import './index.css';
 import Counters from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
