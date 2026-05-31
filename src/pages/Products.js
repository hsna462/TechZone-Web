import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import monitor from "../assets/monitor.jpg";
import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import gamingLaptop from "../assets/gaming-laptop.jpg";
import phone2 from "../assets/phone2.jpg";
import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import powerbank from "../assets/powerbank.jpg";
import charger from "../assets/charger.jpg";
import mousepad from "../assets/mousepad.jpg";

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const initialProducts = [
    { id: 1, name: "Laptop", price: 800, category: "laptops", image: laptop },
    { id: 2, name: "Phone", price: 600, category: "phones", image: phone },
    { id: 3, name: "Monitor", price: 150, category: "accessories", image: monitor },
    { id: 4, name: "Mouse", price: 25, category: "accessories", image: mouse },
    { id: 5, name: "Keyboard", price: 70, category: "accessories", image: keyboard },
    { id: 6, name: "Gaming Laptop", price: 1200, category: "gaming", image: gamingLaptop },
    { id: 7, name: "Phone Pro", price: 900, category: "phones", image: phone2 },
    { id: 8, name: "Headphones", price: 200, category: "accessories", image: headphones },
    { id: 9, name: "Smartwatch", price: 100, category: "accessories", image: smartwatch },
    { id: 10, name: "Powerbank", price: 50, category: "accessories", image: powerbank },
    { id: 11, name: "Charger", price: 20, category: "accessories", image: charger },
    { id: 12, name: "Mousepad", price: 10, category: "accessories", image: mousepad }
  ];

  const [products, setProducts] = useState(initialProducts);

  
  useEffect(() => {
    if (category) {
      setProducts(
        initialProducts.filter((p) => p.category === category)
      );
    } else {
      setProducts(initialProducts);
    }
  }, [category]);

  
  const handleSort = (e) => {
    const value = e.target.value;

    let sorted = [...products];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">All Products</h2>

      {/* SORT */}
      <div className="d-flex justify-content-end mb-3">
        <select className="form-select w-25" onChange={handleSort}>
          <option value="">Sort by</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
      </div>

      
      <div className="row g-4">

        {products.map((product) => (
          <div className="col-md-3" key={product.id}>

            <div className="card h-100 text-center">

              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-image"
              />

              <div className="card-body">

                <h6>{product.name}</h6>
                <p>${product.price}</p>

                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-dark btn-sm"
                >
                  View
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;