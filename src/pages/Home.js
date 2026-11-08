import { Link } from "react-router-dom";
import { categories, featuredProducts } from "../data/Data";
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/banner1.jpg";

const Home = () => (
  <>
    <section className="hero-section">
      <img src={banner1} className="hero-image" alt="Explore the latest technology at TechZone" />
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">WELCOME TO TECHZONE</span>
            <h1>Technology that<br />moves you forward.</h1>
            <p>Discover practical tech, everyday essentials, and gear made for your next big idea.</p>
            <Link to="/products" className="btn btn-light btn-lg">Explore products</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="container section-space">
      <div className="section-heading text-center">
        <span className="eyebrow">BROWSE OUR STORE</span>
        <h2>Shop by category</h2>
        <p>Find what you need, faster.</p>
      </div>
      <div className="row g-3">
        {categories.map((category) => (
          <div className="col-6 col-lg-3" key={category.value}>
            <Link to={`/products?category=${category.value}`} className="category-tile">
              <span className="category-icon">{category.icon}</span>
              <h5>{category.name}</h5>
              <p>{category.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="featured-section section-space">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div className="section-heading mb-0">
            <span className="eyebrow">HAND-PICKED FOR YOU</span>
            <h2>Featured products</h2>
            <p>Some of our popular picks.</p>
          </div>
          <Link to="/products" className="text-link">View all products →</Link>
        </div>
        <div className="row g-4">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  </>
);

export default Home;
