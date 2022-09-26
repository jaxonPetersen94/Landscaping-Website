import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Commercial from "./pages/services/commercial/Commercial";
import Residential from "./pages/services/residential/Residential";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import RequestQuote from "./pages/request-quote/RequestQuote";
import Register from "./pages/auth/register/Register";
import Signin from "./pages/auth/signin/Signin";
import User from "./pages/user/User";

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
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}
