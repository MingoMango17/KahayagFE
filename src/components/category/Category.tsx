import Image from 'next/image';
import CategoryButton from './CategoryButton';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

interface CategoryProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const MemoizedCategoryButton = React.memo(CategoryButton);

const Category: React.FC<CategoryProps> = ({ onCategoryChange, selectedCategory }) => {
  const categories = [
    { name: 'All', imgUrl: '' },
    { name: 'Tanghalian', imgUrl: '/small_icon_tanghalian.png' },
    { name: 'Dessert', imgUrl: '/dessert.svg' },
    { name: 'Pizza', imgUrl: '/pizza_1.svg' },
    { name: 'Snacks', imgUrl: '/snacks.svg' },
    { name: 'Soups', imgUrl: '/soup.svg' },
    { name: 'Drinks', imgUrl: '/drink.svg' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategoriesCount, setVisibleCategoriesCount] = useState(categories.length);
  const [categoryButtonWidth, setCategoryButtonWidth] = useState(100); // Default width
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const categoryButtonRef = useRef<HTMLDivElement>(null);

  const handleClick = (name: string) => {
    onCategoryChange(name);
    console.log(`Selected category: ${name}`);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const calculateVisibleCategories = () => {
      if (containerRef.current && contentRef.current && categoryButtonRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = categoryButtonRef.current.offsetWidth;
        setCategoryButtonWidth(buttonWidth);
        const maxVisibleCategories = Math.floor(containerWidth / buttonWidth);
        setVisibleCategoriesCount(Math.min(maxVisibleCategories, categories.length));
        setStartIndex(0); // Reset startIndex when resizing
      }
    };

    const updateArrowsVisibility = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const isOverflowing = contentWidth > containerWidth;
        setShowPrevArrow(startIndex > 0);
        setShowNextArrow(isOverflowing && startIndex + visibleCategoriesCount < categories.length);
      }
    };

    calculateVisibleCategories();
    updateArrowsVisibility();
    window.addEventListener('resize', calculateVisibleCategories);
    window.addEventListener('resize', updateArrowsVisibility);

    return () => {
      window.removeEventListener('resize', calculateVisibleCategories);
      window.removeEventListener('resize', updateArrowsVisibility);
    };
  }, [categories.length, startIndex, visibleCategoriesCount]);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      setShowPrevArrow(startIndex > 0);
      setShowNextArrow(contentWidth > containerWidth);
    }
  }, [startIndex]);

  return (
    <div className="flex flex-col gap-2 select-none w-full">
      <div className="font-bold text-lg text-gray-800">
        <h1>Select Category</h1>
      </div>

      <div className="flex justify-center items-center relative" ref={containerRef}>
        {showPrevArrow && (
          <div
            className={`cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -left-4`}
            onClick={handlePrev}
          >
            <Image src="/left_arrow.svg" alt="to-left icon" width={10} height={10} />
          </div>
        )}

        <div className="flex gap-2 overflow-hidden">
          <div
            ref={contentRef}
            className="flex transition-transform duration-300 ease-in-out gap-2 w-full"
            style={{ transform: `translateX(-${startIndex * categoryButtonWidth}px)` }}
          >
            {categories.map((category, index) => (
              <MemoizedCategoryButton
                key={index}
                name={category.name}
                imgUrl={category.imgUrl}
                isSelected={selectedCategory === category.name.toLowerCase()}
                onClick={() => handleClick(category.name.toLowerCase())}
                // ref={index === 0 ? categoryButtonRef : undefined} // Set ref to measure width
              />
            ))}
          </div>
        </div>

        {true && (
          <div
            className={`cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -right-4 lg:hidden`}
            onClick={handleNext}
          >
            <Image src="/right_arrow.svg" alt="to-right icon" width={10} height={10} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
