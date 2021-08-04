import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots.js';


ReactDOM.render(
  <React.StrictMode>
      <div>
        {/*Using array from robots.js to signify the IDs used, as well as name and emails*/}
        <Card id={robots[0].id} names={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} names={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} names={robots[2].name} email={robots[2].email} />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
