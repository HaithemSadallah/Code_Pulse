import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from './components/Home';
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our_work" element={<OurWork />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
