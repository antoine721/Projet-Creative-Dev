import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
