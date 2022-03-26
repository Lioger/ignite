import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route
          exact
          path="https://lioger.github.io/ignite/"
          element={<Home />}
        />
        <Route
          exact
          path="https://lioger.github.io/ignite/game/:id"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
