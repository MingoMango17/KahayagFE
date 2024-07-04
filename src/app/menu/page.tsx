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

interface MenuItem {
  name: string;
  price: number;
  available: boolean;
  description: string;
  imageURL: string;
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
              <div className="block lg:flex gap-5 py-3">
                <Image
                  boxSize="400px"
                  objectFit="cover"
                  src={selectedFood.imageURL}
                  alt="Food"
                  borderRadius="lg"
                  className="flex-1"
                />

                <div className="right-side flex-1">
                  <h1 className="text-2xl font-bold text-center">
                    {selectedFood.name}
                  </h1>
                  {/* <h1 className="font-bold text-maroon text-base text-center">P{selectedFood.price}.00</h1> */}

                  <p className="mt-2 text-center font-semibold text-sm">
                    {selectedFood.description}
                  </p>
                  <div className="other-info flex justify-between items-center font-bold mt-5 text-center">
                    <div className="items-start text-yellowOrange ml-4">
                      <p>Rating</p>
                      <div className="flex-row flex gap-1 mt-2">
                        <Image
                          boxSize="17px"
                          src="/star.svg"
                          alt="star"
                          objectFit="cover"
                        />
                        <p className="text-sm text-black">4.0</p>
                      </div>
                    </div>
                    <div className="mx-auto text-maroon">
                      <p>Calories</p>
                      <div className="flex-row flex gap-1 mt-2">
                        <Image
                          boxSize="17px"
                          src="/kcal.svg"
                          alt="star"
                          objectFit="cover"
                        />
                        <p className="text-sm text-black">300 kcal</p>
                      </div>
                    </div>
                    <div className="items-end text-green-400 mr-4">
                      <p className="">Time</p>
                      <div className="flex-row flex gap-1 mt-2">
                        <Image
                          boxSize="17px"
                          src="/clock.svg"
                          alt="star"
                          objectFit="cover"
                        />
                        <p className="text-sm  text-black">10 mins</p>
                      </div>
                    </div>
                  </div>

                  <div className="history-section">
                    <h1 className="text-xl font-bold text-start mt-4">
                      History:
                    </h1>
                    <p className="text-sm text-justify pt-1">
                      Crispy Pata, a beloved dish in Filipino cuisine, features
                      a deep-fried pork leg renowned for its crispy exterior and
                      tender interior. Originating in the Philippines, the dish
                      involves marinating the pork leg with garlic, onion, bay
                      leaves, and peppercorns before boiling until tender. After
                      air-drying or refrigerating to remove moisture, the leg is
                      deep-fried to achieve a golden, crunchy texture. Often
                      served with a vinegar-based dipping sauce, Crispy Pata is
                      cherished in Filipino households and restaurants worldwide
                      for its rich flavors and cultural significance.
                    </p>
                  </div>
                  <div className="total text-center mt-2 justify-between flex  items-center">
                    <h1 className="font-bold text-base py-1">Sub-Total:</h1>
                    <h1 className="font-bold text-maroon text-base text-end">
                      P{subtotal}.00
                    </h1>
                  </div>
                  <hr className="mt-2 border-t-2 border-dashed border-gray-300" />
                  <div className="cartSection mt-3 flex flex-row gap-5 items-center justify-between">
                    <div className="flex flex-row items-center gap-5">
                      <button className="bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold" onClick={handleReduceQuantity}>
                        -
                      </button>

                      <p className="text-xl font-bold">{orders}x</p>
                      <button className="bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold" onClick={handleAddQuantity}>
                        +
                      </button>
                    </div>

                    <div className="items-end">
                      <Button
                        colorScheme="red"
                        variant="outline"
                        className="items-end"
                        rightIcon={<HiShoppingCart />}
                        onClick={() => {
                          handleAddToCart(selectedFood)
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>

                <ModalCloseButton className="ml-auto" />
              </div>
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
