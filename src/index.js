import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const cars = [
  {brand:"Ford",model:"Viper",price:200},
  {brand:"Chevy",model:"Scammer",price:280},
  {brand:"Nissan",model:"Clowner",price:250},
  {brand:"Renault",model:"Tortoise",price:600}
];

ReactDOM.render(
  <React.StrictMode>
    <Routes cars={cars}/>
  </React.StrictMode>,
  document.getElementById('root')
);
