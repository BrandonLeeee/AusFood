import "./Cart.css";
import trash from "../assets/trash.svg";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, addToCart, clearCart, deleteItem, totalCart } =
    useContext(CartContext);
  const mockData = [
    {
      id: 1,
      product: "Margherita Pizza",
      size: "Family",
      qty: 1,
      price: 29.99,
    },
    { id: 2, product: "Peperoni Pizza", size: "Medium", qty: 1, price: 19.99 },
  ];

  return (
    <div className="container">
      <div className="flex">
        <h2 className="title">Cart</h2>
        <button onClick={clearCart}>Clear cart</button>
      </div>
      <div className="cart-container">
        {mockData.length === 0 ? (
          <div>No items in your cart!</div>
        ) : (
          mockData.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-img"></div>
              <div className="cart-details">
                <div className="item-info">
                  <div className="cart-name">{item.product}</div>
                  <div className="cart-size">Size: {item.size}</div>
                </div>
                <div className="cart-qty">{item.qty}</div>
                <div className="cart-price">{item.price}</div>
              </div>
              <div className="delete">
                <img
                  src={trash}
                  alt="Delete"
                  onClick={() => deleteItem(item.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div>Total: {totalCart}</div>
    </div>
  );
};

export default Cart;
