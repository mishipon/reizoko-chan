import React from 'react';
import ReactDOM from 'react-dom';

const items = ['豚バラ','にんじん','トマト']

ReactDOM.render(
  <ul>
    {items.map((name) =>
       <li key={name}>{name}</li>
     )}
  </ul>,
  document.querySelector('#app')
)
