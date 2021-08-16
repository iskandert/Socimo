import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
  postData: [
    {
      id: 0,
      name: "Georg Peter",
      action: "added image album",
      date: "Jul,22 2021",
      statistic: "1.2k, 54, 5k, 205",
    },
    {
      id: 1,
      name: "Georg Peter",
      action: "shared link",
      date: "Oct,3 2020",
      statistic: "0.8k, 71, 4.2k, 198",
    },
    {
      id: 2,
      name: "Georg Peter",
      action: "create post",
      date: "Sep,15 2020",
      statistic: "0.9k, 47, 3.8k, 176",
    },
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
