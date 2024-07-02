"use client";
import Category from "@/components/category/Category";
import FoodSelectionCard from "@/components/foodselectioncard/FoodSelectionCard";
import PromoBanner from "@/components/promobanner/PromoBanner";
import SearchBar from "@/components/searchbar/SearchBar";
import Cart from "@/components/cart/Cart";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  price: number;
  available: boolean;
  description: string; // Assuming you have a description field
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
  const [menu, setMenu] = useState<Menu>({});
  const [isLoaded, setIsLoaded] = useState(false);

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
        <Category />
      </div>

      <div className="flex justify-between items-center mx-10 mt-7 pb-5 border-b-2">
        <p className="font-bold text-lg text-gray-800">Pick Your Order</p>
        <SearchBar />
      </div>

      <div className="px-10 py-5 h-[400px] overflow-y-scroll flex gap-5 flex-wrap md:justify-start">
        {Object.entries(menu).map(([category, items]) =>
          (items as MenuItem[]).map((item: MenuItem) => (
            <FoodSelectionCard
              key={item.name} 
              name={item.name}
              desc={item.description}
              price={item.price}
              imgUrl={item.imageURL}
              isLoaded={isLoaded}
            />
          ))
        )}
      </div>

      {/* <div className="text-center">@Order Now</div> */}

      <Cart itemsCount={20} />
    </>
  );
};

export default MenuPage;
