import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import LandingCard from "@/components/landingcard/LandingCard";
import SearchFood from "@/components/searchFood/searchFood";
import FoodBoxes from "@/components/foodBoxes/foodBoxes";
import FoodBoxes2 from "@/components/foodBoxes/foodBoxes2";
import Footer from "@/components/footer/footer";
import TopMenu from "@/components/topMenu/topMenu";
import Link from "next/link";

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const HomePage = () => {
  return (
    <div className="bg-gray-100 w-full overflow-x-hidden overflow-y-hidden">
      {/* <div className="bg-svg-background bg-no-repeat bg-cover bg-center w-screen h-[84vh] mt-0"> */}
      <div className="bg-maroon w-full h-auto ">
        <div className="flex justify-between px-10 py-4">
          <div className="w-full">
            <div className="flex flex-col text-white font-[700] text-2xl sm:text-4xl md:text-6xl lg:text-8xl 2xl:text-txl overflow-visible whitespace-nowrap">
              <span>Experience the</span>
              <span>essence of</span>
              <span>Kahayag in</span>
              <span className="mb-5">every bite</span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-pure mb-5 text-sm">
                Skip the wait, order ahead, and savor every moment with Kahayags
                delicious offering
              </span>
              <button className="bg-pure text-white font-bold w-[150px] h-[40px] rounded-full flex items-center justify-center md:w-[200px] md:h-[60px] md:text-xl">
                Order Now
              </button>
            </div>
          </div>
          <div className="ml-5">
            <Image
              className="-translate-y-[3.2rem] animate-rotate-clockwise drop-shadow-2xl mr-60 "
              src="/ramen.svg"
              alt="ramen Logo"
              layout="responsive"
              width={3000}
              height={3000}
              priority
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col w-full">
        <div className={`${caveat.className} flex items-center gap-1 p-5`}>
          <span className="text-8xl md:text-9xl">H</span>
          <span className="text-5xl md:text-7xl">ow does this work?</span>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 w-full px-10">
            <LandingCard
              title="Browse and Select"
              desc="Discover dishes, customize and add to cart"
              imageUrl="/landingCard1.svg"
            />
            <LandingCard
              title="Place order"
              desc="Confirm choices and receive order confirmation"
              imageUrl="/landingCard2.svg"
            />
            <LandingCard
              title="Pickup with QR Code"
              desc="Show QR code at counter to pay and for quick pickup"
              imageUrl="/landingCard3.svg"
            />
        </div>
      </div>

      <div className="flex gap-2 mt-5 w-full p-5">
        <Image src="/chef.svg" alt="Chef" width={300} height={500} priority className="w-[200px] md:w-[600px]" />
        <div className="w-full flex flex-col justify-center">
          <div className={caveat.className}>
            <span className="text-8xl md:text-9xl">A</span>
            <span className="text-5xl md:text-7xl">bout us</span>
          </div>
          <div className="flex w-full pr-3 pl-2">
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident expedita et laudantium excepturi. Quia obcaecati alias a
              sunt, magnam sint voluptate sequi
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident expedita et laudantium excepturi. Quia obcaecati alias a
              sunt, magnam sint voluptate sequi
            </span>
          </div>
        </div>
      </div>

      <div className="p-10 flex justify-between items-end">
        <div className={caveat.className}>
          <span className="text-8xl md:text-9xl">S</span>
          <span className="text-5xl md:text-7xl">earch by food</span>
        </div>
        <Link className="cursor-pointer hover:underline" href="#">View All </Link>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 w-full p-10">
        <SearchFood imageUrl="/noodles.svg" title="Tanghalian" />
        <SearchFood imageUrl="/burger.svg" title="Dessert" />
        <SearchFood imageUrl="/pizza.svg" title="Pizza" />
        <SearchFood imageUrl="/sandwich.svg" title="Snacks" />
        <SearchFood imageUrl="/chowmein.svg" title="Soups" />
        <SearchFood imageUrl="/chowmein.svg" title="Drinks" />
      </div>

      <div className="flex flex-col justify-center items-center mt-10 bg-maroon text-white p-5 w-full cursor-pointer">
          <span className={`text-6xl font-bold ${caveat.className}`}>Our Top 3 Menu</span>
          <span className=" md:w-[50rem] text-center mt-5 font-thin text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            expedita et laudantium excepturi. Quia obcaecati alias a sunt,
            magnam sint voluptate sequi
          </span>
          <div className="food-container flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row py-5 gap-2 ">
            <TopMenu
              title="Porter House"
              price="₱700.00"
              imageURL="/topFood2.svg"
            />
            <TopMenu
              title="Pork Silog"
              price="₱250.00"
              imageURL="/topFood1.svg"
            />
            <div className="flex justify-center md:col-span-2 lg:col-span-auto">
              <TopMenu
                title="Filet Mignon"
                price="₱520.00"
                imageURL="/topFood3.svg"
              />
            </div>
        </div>

      </div>

      <div className="flex justify-center items-center my-5 w-full h-auto">
        <div className="flex flex-col items-center gap-7">
          <FoodBoxes
            title="Best deals"
            orange="Crispy Chicken Sandwich"
            subTitle="Fried chicken breast on a brioche bun with lettuce, tomato, pickles, and mayo. Buy one, get one 50% off."
            imageURL="/foodBox1.svg"
          />
          <FoodBoxes2
            title="Relish a"
            orange="Flaky Fish Treat"
            subTitle="Breaded fish fillet on ciabatta with lettuce, tomato, tartar sauce, and lemon. Free drink with purchase."
            imageURL="/foodBox2.svg"
          />
          <FoodBoxes
            title="Enjoy a"
            orange="Crunchy Veggie Bliss"
            subTitle="Breaded portobello on whole grain bun with roasted peppers, avocado, lettuce, tomato, and mozzarella. 20% off on Tuesdays."
            imageURL="/foodBox3.svg"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
