import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import DataPolicy from "./pages/DataPolicy";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/data-policy" element={<DataPolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  </BrowserRouter>
);

export default App;