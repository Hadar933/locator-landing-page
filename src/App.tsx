import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "@/components/NavigationBar";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import ArugamBayFood from "@/pages/ArugamBayFood";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/phuket-local-guide" element={<BlogPost />} />
        <Route path="/blog/arugam-bay-food-guide" element={<ArugamBayFood />} />
      </Routes>
    </Router>
  );
};

export default App;
