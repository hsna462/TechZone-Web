
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Data } from "../data/Data";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = Data.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="container section-space text-center">
        <h2>Product not found</h2>
        <p className="text-muted">The product may have been removed or the link is incorrect.</p>
        <Link to="/products" className="btn btn-dark">Back to products</Link>
      </main>
    );
  }

  return (
    <main className="container section-space">
      <div className="mb-4"><Link to="/products" className="text-link">← Back to products</Link></div>
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="detail-image-panel">
            <img src={product.image} alt={product.name} className="img-fluid detail-image" />
          </div>
        </div>
        <div className="col-md-6">
          <span className="product-category">{product.category}</span>
          <h1 className="detail-title mt-2">{product.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <div className="d-flex flex-wrap gap-2 mt-4">
            <button className="btn btn-dark btn-lg" onClick={() => addToCart(product)}>Add to cart</button>
            <Link to="/cart" className="btn btn-outline-dark btn-lg">View cart</Link>
          </div>
          <p className="small text-muted mt-3">Added items are saved in this browser.</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
