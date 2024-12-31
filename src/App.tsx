import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import ArugamBayFood from "./pages/ArugamBayFood";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:category" element={<BlogCategory />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/arugam-bay-food" element={<ArugamBayFood />} />
      </Routes>
    </Router>
  );
}

export default App;
