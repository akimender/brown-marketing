// LIBRARY IMPORTS
import { useState } from 'react'
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// STYLESHEET IMPORTS
import './App.css'

// COMPONENT IMPORTS
import Home from './components/Home';
import Join from './components/Join';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
