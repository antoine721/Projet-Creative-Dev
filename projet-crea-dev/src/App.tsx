import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./context/Home";
import Question1 from "./context/Question1";
import Question2 from "./context/Question2";
import Question3 from "./context/Question3";
import Final from "./context/Final";
import { EmotionProvider } from "./context/EmotionContext";
import Aurora from "./context/Aurora";
// import css

function App() {
  return (
    <EmotionProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question1" element={<Question1 />} />
            <Route path="/question2" element={<Question2 />} />
            <Route path="/question3" element={<Question3 />} />
            <Route path="/final" element={<Final />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </EmotionProvider>
  );
}

export default App;
