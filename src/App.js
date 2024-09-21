import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import Home from './components/Home';
import OurWork from "./components/OurWork";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our_work" element={<OurWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
