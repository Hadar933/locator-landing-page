import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import ComingSoon from "./pages/ComingSoon";
import Newsletter from "./pages/Newsletter";
import Sitemap from "./pages/Sitemap";
import Test from "./pages/Test";
import { NavigationBar } from "./components/NavigationBar";
import { Tools } from "./pages/Tools";
import { FlightTime } from "./components/FlightTime";
import AIRecommendations from "./pages/free-tools/ai-recommendations/index";
function App() {
  return (
    <Router>
      {window.location.pathname !== '/sitemap.xml' && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:country" element={<BlogCategory />} />
        <Route path="/blog/:country/:slug" element={<BlogPost />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/sitemap_index_template.xml" element={<Sitemap />} />
        <Route path="/test" element={<Test />} />
        <Route path="/free-tools" element={<Tools />} />
        <Route path="/free-tools/flight-time" element={<FlightTime />} />
        <Route path="/free-tools/ai-recommendations" element={<AIRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;