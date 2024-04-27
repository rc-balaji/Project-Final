import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVEList from "./components/CVEList";
import CVEDetails from "./components/CVEDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CVEList />} />
          <Route path="/cves/:id" element={<CVEDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
