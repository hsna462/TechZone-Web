import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
   
      <section>
        <img
          src="/images/banner1.jpg"
          className="img-fluid w-100"
          alt="TechZone Banner"
        />
      </section>

      
      <section className="container my-5">
        <h2 className="text-center mb-4">Categories</h2>

        <div className="row text-center">

          <div className="col-md-3">
            <div className="category-box p-4">
              Laptops
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box p-4">
              Phones
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box p-4">
              Accessories
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box p-4">
              Gaming
            </div>
          </div>

        </div>
      </section>

      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">

          
          <div className="col-md-4">
            <div className="card text-center h-100">
              <img
                src="/images/laptop.jpg"
                className="card-img-top product-card-img"
                alt="Laptop"
              />
              <div className="card-body">
                <h5>Laptop</h5>
                <p>$800</p>
                <Link to="/products" className="btn btn-dark btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="card text-center h-100">
              <img
                src="/images/phone.jpg"
                className="card-img-top product-card-img"
                alt="Phone"
              />
              <div className="card-body">
                <h5>Phone</h5>
                <p>$600</p>
                <Link to="/products" className="btn btn-dark btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>

      
          <div className="col-md-4">
            <div className="card text-center h-100">
              <img
                src="/images/headphones.jpg"
                className="card-img-top product-card-img"
                alt="Headphones"
              />
              <div className="card-body">
                <h5>Headphones</h5>
                <p>$150</p>
                <Link to="/products" className="btn btn-dark btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;