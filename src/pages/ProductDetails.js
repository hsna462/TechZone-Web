import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
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
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = [
  { id: 1, name: "Laptop", price: 800, image: laptop, description: "High-performance laptop." },
  { id: 2, name: "Phone", price: 600, image: phone, description: "Modern smartphone." },
  { id: 3, name: "Monitor", price: 150, image: monitor, description: "Full HD monitor." },
  { id: 4, name: "Gaming Mouse", price: 25, image: mouse, description: "Precision gaming mouse." },
  { id: 5, name: "Keyboard", price: 70, image: keyboard, description: "Mechanical keyboard." },
  { id: 6, name: "Gaming Laptop", price: 1200, image: gamingLaptop, description: "Powerful gaming laptop." },
  { id: 7, name: "iPhone Style", price: 900, image: phone2, description: "Premium smartphone." },
  { id: 8, name: "Headphones", price: 200, image: headphones, description: "Noise-cancelling headphones." },
  { id: 9, name: "Smartwatch", price: 100, image: smartwatch, description: "Smart wearable device." },
  { id: 10, name: "Powerbank", price: 50, image: powerbank, description: "Portable charger." },
  { id: 11, name: "Charger", price: 20, image: charger, description: "Fast charging adapter." },
  { id: 12, name: "Mousepad", price: 10, image: mousepad, description: "Smooth gaming mousepad." }
];
  

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container my-5">

      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">

          <h2>{product.name}</h2>

          <h4 className="text-muted">
            ${product.price}
          </h4>

          <p>{product.description}</p>

          <button
            className="btn btn-dark"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;