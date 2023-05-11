import React from 'react';
import ReactDOM from 'react-dom/client';
// import './Box/fruitStyle.css';
// import Box from './Box/box.jsx'
import './Card/card.css'
import Main from './Card/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Box /> */}
    <Main/>
  </React.StrictMode>
);

