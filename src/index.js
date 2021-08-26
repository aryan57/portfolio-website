import React from 'react';
import ReactDOM from 'react-dom';
import CustomRouter from './CustomRouter';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Header'
import Footer from './Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>

    <CustomRouter />

			<Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);