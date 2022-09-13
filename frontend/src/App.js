import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Commercial from "./pages/services/commercial/Commercial.jsx";
import Residential from "./pages/services/residential/Residential.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Register from "./pages/auth/register/Register.jsx";
import RequestQuote from "./pages/request-quote/RequestQuote.jsx";
import Signin from "./pages/auth/signin/Signin.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}
