import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import DataPolicy from "./pages/DataPolicy";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/data-policy" element={<DataPolicy />} />
    </Routes>
  </BrowserRouter>
);

export default App;