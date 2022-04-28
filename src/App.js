import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { addSunData } from './Redux/Home/Home';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addSunData());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
