import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './utils/style/index.css'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
