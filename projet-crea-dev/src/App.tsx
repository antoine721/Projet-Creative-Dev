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

      {/* <h1 className="anim title hight white">Lorem </h1>
      <div className="anim middle">
        <h1 className="ml white">ipsum</h1>
        <h1 className="mr">dolor</h1>
      </div>
      <h1 className="anim title">sit amet.</h1> */}
    </div>
  );
}

export default App;
