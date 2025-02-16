import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.some((prevCart) => prevCart.id === item.id);

      // If the item existing in the cart, update the quantity
      if (existingItem) {
        return prevCart.map((prevItem) =>
          prevItem.id === item.id
            ? { ...item, qty: prevItem.qty + 1 }
            : prevItem
        );
      } else {
        // Add a new item
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(
    function updateTotalCart() {
      const newTotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      setTotalCart(newTotal.toFixed(2));
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, totalCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
