import { useState } from "react";
import PhaserContainer from "./PhaserContainer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(true);
  console.log("🚀 ~ file: App.jsx:6 ~ true:", toggle);
  return (
    <Routes>
      <Route
        path="/home"
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
