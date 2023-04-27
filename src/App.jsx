import { useState } from "react";
import PhaserContainer from "./PhaserContainer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h2>Hello</h2>
            <Link to="/play">
              <button>Go Play</button>
            </Link>
          </div>
        }
      />
      <Route path="/play" element={<PhaserContainer />} />
    </Routes>
  );
}

export default App;
