import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails"
import CartContext from"./context/CartContext"

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
         <Navbar />
      <div className="flex-grow-1">
      <Routes>
       <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      </div>
      

      
      <Footer />


      </div>
    </Router>
  );
}

export default App;