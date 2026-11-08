import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-link px-lg-3 ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark site-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">T</span> TechZone
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink end className={navClass} to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/products" onClick={closeMenu}>
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={navClass} to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
          <NavLink className={navClass} to="/login" onClick={closeMenu}>
               Login
            </NavLink>
            </li>

            <li className="nav-item ms-lg-2">
              <NavLink
                className="btn btn-light cart-nav-button"
                to="/cart"
                onClick={closeMenu}
              >
                Cart <span className="cart-badge">{cartCount}</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;