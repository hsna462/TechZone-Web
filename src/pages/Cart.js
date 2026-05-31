import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">

      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty 🛒</h4>
          <Link to="/products" className="btn btn-dark mt-3">
            Go Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="card p-3 shadow-sm">

            <table className="table align-middle">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {cart.map((item) => (
                  <tr key={item.id}>

                    <td className="d-flex align-items-center gap-2">
                      <img src={item.image} width="60" alt={item.name} />
                      {item.name}
                    </td>

                    <td>${item.price}</td>

                    <td>{item.qty}</td>

                    <td>${item.price * item.qty}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <div className="text-end mt-4">
            <h4>Total: ${total}</h4>

            <Link to="/products" className="btn btn-outline-dark me-2">
              Continue Shopping
            </Link>

            <button className="btn btn-dark">
              Checkout
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;