import { Link } from "react-router-dom";

import banner1 from "../assets/banner1.jpg";
import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import headphones from "../assets/headphones.jpg";

function Home() {
  return (
    <div>

      
      <section>
        <img
          src={banner1}
          className="img-fluid w-100"
          alt="Banner"
        />
      </section>

      
      <section className="container my-5">
        <h2 className="text-center mb-4">Categories</h2>

        <div className="row text-center">

          <div className="col-md-3">
            <Link to="/products?category=laptops" className="text-decoration-none text-dark">
              <div className="category-box p-4">Laptops</div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/products?category=phones" className="text-decoration-none text-dark">
              <div className="category-box p-4">Phones</div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/products?category=accessories" className="text-decoration-none text-dark">
              <div className="category-box p-4">Accessories</div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/products?category=gaming" className="text-decoration-none text-dark">
              <div className="category-box p-4">Gaming</div>
            </Link>
          </div>

        </div>
      </section>

      
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">

        
          <div className="col-md-4">
            <div className="card h-100 text-center">

              <img
                src={laptop}
                className="card-img-top home-image"
                alt="Laptop"
              />

              <div className="card-body">
                <h5>Laptop</h5>
                <p>$800</p>

                
                <Link to="/product/1" className="btn btn-dark">
                  View
                </Link>
              </div>

            </div>
          </div>

        
          <div className="col-md-4">
            <div className="card h-100 text-center">

              <img
                src={phone}
                className="card-img-top home-image"
                alt="Phone"
              />

              <div className="card-body">
                <h5>Phone</h5>
                <p>$600</p>

                
                <Link to="/product/2" className="btn btn-dark">
                  View
                </Link>
              </div>

            </div>
          </div>

          
          <div className="col-md-4">
            <div className="card h-100 text-center">

              <img
                src={headphones}
                className="card-img-top home-image"
                alt="Headphones"
              />

              <div className="card-body">
                <h5>Headphones</h5>
                <p>$200</p>

                
                <Link to="/product/8" className="btn btn-dark">
                  View
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;