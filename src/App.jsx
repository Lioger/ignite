import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home";
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game/:id" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
