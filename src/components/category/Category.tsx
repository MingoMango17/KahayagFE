import Image from 'next/image';
import CategoryButton from './CategoryButton';
import { useState } from 'react';

interface CategoryProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string; // Define selectedCategory prop
}

const Category: React.FC<CategoryProps> = ({ onCategoryChange, selectedCategory }) => {
  const handleClick = (name: string) => {
    onCategoryChange(name); // Notify parent component of selected category
    console.log(`Selected category: ${name}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg text-gray-800">
        <h1>Select Category</h1>
      </div>

      <div className="flex justify-center items-center relative">
        <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -left-4">
          <Image src="/left_arrow.svg" alt="to-left icon" width={10} height={10} />
        </div>

        <div className="flex gap-2 overflow-x-auto overflow-hidden">
          <CategoryButton
            name="All"
            imgUrl=""
            isSelected={selectedCategory === 'all'}
            onClick={() => handleClick('all')}
          />
          <CategoryButton
            name="Tanghalian"
            imgUrl="/small_icon_tanghalian.png"
            isSelected={selectedCategory === 'tanghalian'}
            onClick={() => handleClick('tanghalian')}
          />
          <CategoryButton
            name="Dessert"
            imgUrl="/dessert.svg"
            isSelected={selectedCategory === 'dessert'}
            onClick={() => handleClick('dessert')}
          />
          <CategoryButton
            name="Pizza"
            imgUrl="/pizza_1.svg"
            isSelected={selectedCategory === 'pizza'}
            onClick={() => handleClick('pizza')}
          />
          <CategoryButton
            name="Snacks"
            imgUrl="/snacks.svg"
            isSelected={selectedCategory === 'snacks'}
            onClick={() => handleClick('snacks')}
          />
          <CategoryButton
            name="Soups"
            imgUrl="/soup.svg"
            isSelected={selectedCategory === 'soups'}
            onClick={() => handleClick('soups')}
          />
          <CategoryButton
            name="Drinks"
            imgUrl="/drink.svg"
            isSelected={selectedCategory === 'drinks'}
            onClick={() => handleClick('drinks')}
          />
        </div>

        <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -right-4">
          <Image src="/right_arrow.svg" alt="to-right icon" width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Category;
