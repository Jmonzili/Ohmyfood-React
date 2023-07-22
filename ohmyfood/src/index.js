import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './style/index.css'
import Home from './pages/Home';
import Menu from './pages/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
