"use client";

import Image from "next/image";
import CategoryButton from "./CategoryButton";
import { useState } from "react";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (name: string) => {
    setSelectedCategory(name);
    console.log(`Selected category: ${name}`);
  };
  return (
    <div className="flex flex-col gap-2 ">
      <div className="font-bold text-lg text-gray-800">
        <h1>Select Category</h1>
      </div>

      <div className="flex justify-center items-center relative">
        <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -left-4">
          <Image
            src="/left_arrow.svg"
            alt="to-left icon"
            width={10}
            height={10}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto overflow-hidden">
          <CategoryButton
            name="All"
            imgUrl=""
            isSelected={selectedCategory === "All"}
            onClick={handleClick}
          />
          <CategoryButton
            name="Tanghalian"
            imgUrl="/small_icon_tanghalian.png"
            isSelected={selectedCategory === "Tanghalian"}
            onClick={handleClick}
          />
          <CategoryButton
            name="Dessert"
            imgUrl="/dessert.svg"
            isSelected={selectedCategory === "Dessert"}
            onClick={handleClick}
          />
          <CategoryButton
            name="Pizza"
            imgUrl="/pizza_1.svg"
            isSelected={selectedCategory === "Pizza"}
            onClick={handleClick}
          />
          <CategoryButton
            name="Snacks"
            imgUrl="/snacks.svg"
            isSelected={selectedCategory === "Snacks"}
            onClick={handleClick}
          />
          <CategoryButton
            name="Soups"
            imgUrl="/soup.svg"
            isSelected={selectedCategory === "Soups"}
            onClick={handleClick}
          />
        </div>

        <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -right-4">
          <Image
            src="/right_arrow.svg"
            alt="to-right icon"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
