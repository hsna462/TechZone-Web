import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="container my-5">

      
      <h2 className="text-center mb-4">All Products</h2>

      
      <div className="d-flex justify-content-end mb-3">
        <select className="form-select w-25">
          <option>Sort by</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

   
      <div className="row g-4">

        {
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/laptop.jpg"
              className="card-img-top product-card-img"
              alt="Laptop"
            />
            <div className="card-body">
              <h6>Laptop</h6>
              <p>$800</p>
              <Link to="/product/1" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        }
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/phone.jpg"
              className="card-img-top product-card-img"
              alt="Phone"
            />
            <div className="card-body">
              <h6>Phone</h6>
              <p>$600</p>
              <Link to="/product/2" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/monitor.jpg"
              className="card-img-top product-card-img"
              alt="Monitor"
            />
            <div className="card-body">
              <h6>Monitor</h6>
              <p>$150</p>
              <Link to="/product/3" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/mouse.jpg"
              className="card-img-top product-card-img"
              alt="Mouse"
            />
            <div className="card-body">
              <h6>Gaming Mouse</h6>
              <p>$25</p>
              <Link to="/product/4" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

       
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/keyboard.jpg"
              className="card-img-top product-card-img"
              alt="Keyboard"
            />
            <div className="card-body">
              <h6>Keyboard</h6>
              <p>$70</p>
              <Link to="/product/5" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/gaming-laptop.jpg"
              className="card-img-top product-card-img"
              alt="Gaming Laptop"
            />
            <div className="card-body">
              <h6>Gaming Laptop</h6>
              <p>$1200</p>
              <Link to="/product/6" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/phone2.jpg"
              className="card-img-top product-card-img"
              alt="Phone 2"
            />
            <div className="card-body">
              <h6>iPhone Style</h6>
              <p>$900</p>
              <Link to="/product/7" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
          <div className="card h-100 text-center">
            <img
              src="/images/headphones.jpg"
              className="card-img-top product-card-img"
              alt="Headphones"
            />
            <div className="card-body">
              <h6>Headphones</h6>
              <p>$200</p>
              <Link to="/product/8" className="btn btn-dark btn-sm">
                View
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;