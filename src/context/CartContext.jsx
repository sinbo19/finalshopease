
import { createContext, useReducer, useEffect } from "react";
import cartReducer from "../reducers/cartReducer.js";

export const CartContext = createContext();

// Load saved cart when the application starts
function getInitialCart() {
  try {
    const savedCart = localStorage.getItem("shopease-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Could not load saved cart:", error);
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    undefined,
    getInitialCart
  );

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("shopease-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
