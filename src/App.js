import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
