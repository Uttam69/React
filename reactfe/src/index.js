import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import reportWebVitals from './reportWebVitals';
// import Routing from './routes/routes';
import RouterComponent from './routes/routes';

const express = require("express");
const app = express();
const cors= require("cors");
const lists= require("./lists.json");
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("./", (req, res)=>{
  res.send(lists);
});
app.listen(PORT, (req, res)=>{
  console.log(`Server is running on port ${PORT}`);
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
