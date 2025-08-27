import "./App.css";
import AboutUs from "./Components/AboutUs";
import Giving from "./Components/Giving";

import Hero from "./Components/Hero";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurTeam from "./Components/OurTeam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/give" element={<Giving />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
