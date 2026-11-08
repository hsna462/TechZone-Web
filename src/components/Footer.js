import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer mt-auto">
    <div className="container py-4">
      <div className="row align-items-center gy-3">
        <div className="col-md-6">
          <Link to="/" className="footer-brand">TechZone</Link>
          <p className="mb-0 footer-note">Technology for the way you live and work.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <div className="footer-links mb-2">
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <small>© {new Date().getFullYear()} TechZone. All rights reserved.</small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;