import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article className="card product-card h-100">
        <Link to={`/product/${product.id}`} className="product-image-wrap">
          <img src={product.image} alt={product.name} className="card-img-top product-image" />
        </Link>
        <div className="card-body d-flex flex-column">
          <span className="product-category">{product.category}</span>
          <h5 className="card-title mt-2">{product.name}</h5>
          <div className="mt-auto d-flex justify-content-between align-items-center gap-2">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <div className="d-flex gap-2">
              <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm">Details</Link>
              <button type="button" className="btn btn-dark btn-sm" onClick={() => addToCart(product)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
