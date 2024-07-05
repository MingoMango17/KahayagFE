"use client";
import Category from "@/components/category/Category";
import FoodSelectionCard from "@/components/foodselectioncard/FoodSelectionCard";
import PromoBanner from "@/components/promobanner/PromoBanner";
import SearchBar from "@/components/searchbar/SearchBar";
import Cart from "@/components/cart/Cart";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/CartContext"
import OrderDetails from "@/components/orderdetails/OrderDetails";

interface MenuItem {
  name: string;
  price: number;
  available: boolean;
  description: string;
  imageURL: string;
  rating: number;
  calories: number;
  time: number;
  history: string;
}

interface Menu {
  [category: string]: MenuItem[];
}

async function getMenu() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

const MenuPage = () => {
  const [menu, setMenu] = useState<Menu>({}); // this is for the all section
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [cartOrders, setCartOrders] = useState<MenuItem[]>([]);
  const toast = useToast();
  const cartID = 'cart-toast'
  const { addToCart } = useCart();


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = (foodItem: MenuItem) => {
    setSelectedFood(foodItem);
    setOrders(1);
    setSubtotal(foodItem.price)
    onOpen();
  };

  const handleReduceQuantity = () => {
    const result = orders - 1;
    if (orders <= 1) return; // Ensure orders doesn't go below 1
    setOrders(result);

    if (selectedFood) {
      setSubtotal(result * selectedFood.price);
    }
  };
  

  const handleAddQuantity = () =>{
    const result = orders + 1
    setOrders(result)

    if (selectedFood) {
      setSubtotal(result * selectedFood.price);
    }
  }

  const handleAddToCart  = (selectedFood:MenuItem) =>{
    if (!toast.isActive(cartID)) {
      toast({
        id: cartID,
        title: 'Cart Updated',
        description: `${selectedFood.name} has been added`, // Properly interpolate the selectedFood.name
        position: "top",
        isClosable: true,
        status: 'success',
      });
    }

    addToCart(selectedFood);
    // setCartOrders((prevCartOrders) => [...prevCartOrders, selectedFood]);
  }

  useEffect(() => {
    async function getData() {
      const menuData = await getMenu();
      console.log("Menu Data", menuData[0].menu);
      setMenu(menuData[0].menu);

      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }

    getData();
  }, []);

  

  return (
    <>
      <div className="flex gap-2 h-[250px] items-center justify-center overflow-x-hidden">
        <div>
          <PromoBanner
            title="Special Offer!"
            name="Marinated Frog"
            desc="The only delicacy that is not poisonous or whatsoever"
            imgUrl="/frog.png"
          />
        </div>
        <div className="hidden lg:block">
          <PromoBanner
            title="Not a Special Offer!"
            name="Marinated Worm"
            desc="Once tasted always a drug addict muschroom si jake"
            imgUrl="/frog.png"
          />
        </div>
      </div>

      <div className="px-10">
        <Category
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <div className="flex justify-between items-center mx-10 mt-7 pb-5 border-b-2">
        <p className="font-bold text-lg text-gray-800">Pick Your Order</p>
        <SearchBar />
      </div>

      <div className="px-10 py-5 h-[400px] overflow-y-scroll flex gap-5 flex-wrap md:justify-start">
        {Object.entries(menu)
          .filter(
            ([category]) =>
              selectedCategory === "all" || category === selectedCategory
          )
          .map(([category, items]) =>
            items.map((item) => (
              <FoodSelectionCard
                key={item.name}
                name={item.name}
                desc={item.description}
                price={item.price}
                imgUrl={item.imageURL}
                isLoaded={isLoaded}
                onClick={() => handleCardClick(item)}
              />
            ))
          )}
      </div>


      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="">
            {selectedFood ? (
              <OrderDetails
                selectedFood={selectedFood}
                subtotal={subtotal}
                orders={orders}
                handleReduceQuantity={handleReduceQuantity}
                handleAddQuantity={handleAddQuantity}
                handleAddToCart={handleAddToCart}
                onClose={onClose}
              />
            ) : (
              "No food selected"
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Cart/>

    </>
  );
};

export default MenuPage;
