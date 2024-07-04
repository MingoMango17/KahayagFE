import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuItem {
  name: string;
  price: number;
  available: boolean;
  description: string;
  imageURL: string;
}

interface CartContextProps {
  cartOrders: MenuItem[];
  addToCart: (item: MenuItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartOrders, setCartOrders] = useState<MenuItem[]>([]);

  const addToCart = (selectedFood: MenuItem) => {
    setCartOrders((prevOrders) => [...prevOrders, selectedFood]);
  };

  const clearCart = () => {
    setCartOrders([]);
  };

  return (
    <CartContext.Provider value={{ cartOrders, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
