import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Homescreen';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        
          <Navbar />
          <Routes>
            <Route path='/' element = {<Home />} ></Route>
            <Route path='*'>404 Not Found</Route>
          </Routes>
        
      
      </Router>
    </div>
  );
}

export default App;
