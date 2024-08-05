import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Header from './header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
};

export default App;