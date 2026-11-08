import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./css/style.css";

const NotFound = () => (
  <main className="container section-space text-center">
    <span className="eyebrow">404 ERROR</span>
    <h1>Page not found</h1>
    <p className="text-muted">The page you're looking for doesn't exist.</p>
    <a href="/Techzone-Web/" className="btn btn-dark">Return home</a>
  </main>
);

const App = () => (
  <Router basename="/Techzone-Web">
    <ScrollToTop />
    <div className="app-shell">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
