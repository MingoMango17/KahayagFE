import React from 'react';
import { Image, Button,  ModalCloseButton} from '@chakra-ui/react';
import { HiShoppingCart } from 'react-icons/hi';

interface OrderDetailsProps {
  selectedFood: {
    name: string;
    description: string;
    price: number;
    imageURL: string;
    rating: number;
    calories: number;
    time: number;
    history: string;
  };

  subtotal: number;
  orders: number;
  handleReduceQuantity: () => void;
  handleAddQuantity: () => void;
  handleAddToCart: (food: any) => void;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  selectedFood,
  subtotal,
  orders,
  handleReduceQuantity,
  handleAddQuantity,
  handleAddToCart,
  onClose
}) => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-5 py-3">
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
                        <p className="text-sm text-black">{selectedFood.rating}</p>
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
                        <p className="text-sm text-black">{selectedFood.calories} kcal</p>
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
                        <p className="text-sm  text-black">{selectedFood.time} mins</p>
                      </div>
                    </div>
                  </div>

                  <div className="history-section">
                    <h1 className="text-xl font-bold text-start mt-4">
                      History:
                    </h1>
                    <p className="text-sm text-justify pt-1">
                      {selectedFood.history}
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
  );
};

export default OrderDetails;
