import React, { useState } from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Calculator from './components/calculator';
import calculate from './logic/calculate';
import MyQuotation from './components/Quotation/quotes';
// import { Navbar } from './components/Navbar';
// import Home from './components/home';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });
  const handleClick = (e) => {
    setState((old) => calculate(old, e.target.innerText));
  };

  const { total, next } = state;
  const calc = { total, next };
  return (
    <>
      <Calculator handleClick={handleClick} calc={calc} />
      <MyQuotation />
    </>
  );
};

export default App;
