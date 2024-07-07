import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuItem {
  name: string;
  price: number;
  available: boolean;
  description: string;
  imageURL: string;
  quantity: number;
  subtotal: number;
}

interface CartContextProps {
  cartOrders: MenuItem[];
  addToCart: (item: MenuItem) => void;
  clearCart: () => void;
  setCartOrders: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartOrders, setCartOrders] = useState<MenuItem[]>([]);

  const addToCart = (selectedFood: MenuItem) => {
    
    setCartOrders((prevOrders) => {
      const existingItemIndex = prevOrders.findIndex(
        (item) => item.name === selectedFood.name
      );
      
      if (existingItemIndex !== -1) {
        const updatedOrders = [...prevOrders];
        const existingItem = updatedOrders[existingItemIndex];
        existingItem.quantity += selectedFood.quantity;
        selectedFood.quantity = 0;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
        return updatedOrders;
      } else {
        return [...prevOrders, selectedFood];
      }
    });
  };

  const clearCart = () => {
    setCartOrders([]);
  };

  return (
    <CartContext.Provider value={{ cartOrders, addToCart, clearCart, setCartOrders }}>
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
