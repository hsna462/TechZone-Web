import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useContext(CartContext);

  return (
    <main className="container section-space">
      <div className="section-heading mb-4">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Shopping cart</h1>
        <p>Review your items before checkout.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="btn btn-dark">Explore products</Link>
        </div>
      ) : (
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <div className="cart-panel">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <span className="text-muted">${item.price.toFixed(2)} each</span>
                    <div className="quantity-control mt-2">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="text-end">
                    <strong>${(item.price * item.qty).toFixed(2)}</strong>
                    <button className="remove-button d-block mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="text-end pt-3">
                <button className="btn btn-sm btn-link text-danger" onClick={clearCart}>Clear cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="summary-panel">
              <h4>Order summary</h4>
              <div className="summary-line"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="summary-line"><span>Shipping</span><span>Calculated at checkout</span></div>
              <hr />
              <div className="summary-total"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
              <button className="btn btn-dark w-100 mt-4" disabled>Checkout</button>
              <Link to="/products" className="btn btn-outline-dark w-100 mt-2">Continue shopping</Link>
             
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
