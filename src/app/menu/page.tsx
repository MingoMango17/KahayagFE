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
  Skeleton,
} from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import OrderDetails from "@/components/orderdetails/OrderDetails";
import SlideShow from "@/components/slideShow/SlideShow";

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
  quantity: number;
  subtotal: number;
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
  const [subtotal, setSubtotal] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);
  const toast = useToast();
  const cartID = "cart-toast";
  const { addToCart } = useCart();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = (foodItem: MenuItem) => {
    setSelectedFood(foodItem);
    setOrders(1);
    setSubtotal(foodItem.price);
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

  const handleAddQuantity = () => {
    const result = orders + 1;
    setOrders(result);

    if (selectedFood) {
      setSubtotal(result * selectedFood.price);
    }
  };

  const handleAddToCart = (selectedFood: MenuItem) => {
    const quantity = orders;
    const newSubtotal = quantity * selectedFood.price;

    const foodWithAdditionalProps = {
      ...selectedFood,
      quantity,
      subtotal: newSubtotal,
    };

    if (!toast.isActive(cartID)) {
      toast({
        id: cartID,
        title: "Cart Updated",
        description: `${selectedFood.name} has been added`,
        position: "top",
        isClosable: true,
        status: "success",
        duration: 2000,
      });
    }

    addToCart(foodWithAdditionalProps);
    onClose();
  };

  useEffect(() => {

    let timeoutID:NodeJS.Timeout;

    async function getData() {
      const menuData = await getMenu();
      console.log("Menu Data", menuData[0].menu);
      setMenu(menuData[0].menu);

      timeoutID = setTimeout(() => {
        setIsLoaded(true);
      }, 3000);

      // setIsLoaded(true);
    }

    getData();

    return () => clearTimeout(timeoutID);
  }, []);

  const getRandomItem = () => {
    // Select 6 random items
    const allItems = Object.values(menu).flat();
    const shuffledItems = allItems.sort(() => Math.random() - 0.5);
    const selectedItems = shuffledItems.slice(0, 6);
    return selectedItems;
  };

  const randomItems = getRandomItem();
  return (
    <>
      <div className="h-auto flex items-center justify-center overflow-x-hidden w-full p-4 ">
        <Skeleton
          className="relative w-full h-full overflow-hidden"
          isLoaded={isLoaded}
        >
          <SlideShow>
            {randomItems.map((item, index) => {
              return (
                <PromoBanner
                  key={index}
                  title="Weekend Special!"
                  name={item.name}
                  desc={item.description}
                  imgUrl={item.imageURL}
                  onClick={() => handleCardClick(item)}
                />
              );
            })}
          </SlideShow>
        </Skeleton>
      </div>

      <div className="px-10 w-full">
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

      <Cart />
    </>
  );
};

export default MenuPage;
