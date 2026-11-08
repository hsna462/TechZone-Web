import { Link } from "react-router-dom";

const About = () => (
  <main className="container section-space">
    <section className="about-hero">
      <span className="eyebrow">GET TO KNOW US</span>
      <h1>Making technology<br />easier to choose.</h1>
      <p>TechZone is a student e-commerce project built around a simple idea: finding useful technology should feel clear, easy, and enjoyable.</p>
      <Link to="/products" className="btn btn-light mt-2">Explore our products</Link>
    </section>
    <section className="row g-4 mt-4">
      <div className="col-md-4">
        <div className="value-card"><span>01</span><h4>Curated selection</h4><p>Browse laptops, phones, gaming gear, and everyday accessories in one place.</p></div>
      </div>
      <div className="col-md-4">
        <div className="value-card"><span>02</span><h4>Simple experience</h4><p>Clear product details and helpful categories make browsing straightforward.</p></div>
      </div>
      <div className="col-md-4">
        <div className="value-card"><span>03</span><h4>Built to improve</h4><p>We keep refining the experience as we learn and add new features.</p></div>
      </div>
    </section>
  </main>
);

export default About;
