"use client";
import React, { useState, useRef } from "react";
import OrderTypeButton from "@/components/ordertype/OrderTypeButton";
import PaymentModeButton from "@/components/paymentmode/PaymentModeButton";
import PaymentSummary from "@/components/paymentsummary/PaymentSummary";
import OrderSummary from "@/components/ordersummary/OrderSummary";
import OrderedItem from "@/components/ordereditem/OrderedItem";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [selectedOrderType, setSelectedOrderType] = useState("Dine In");
  const [selectedModeOfPayment, setSelectedModeOfPayment] = useState("Cash");

  return (
    <>
      <div className="flex flex-col items-center  w-full pt-10">
        <div className="w-full text-center mt-5">
          <h1 className="font-extrabold text-2xl text-gray-800">My Cart</h1>
          <span className="font-extralight text-sm text-gray-400">
            Id Number: 0100010
          </span>
        </div>

        <div className="block lg:flex justify-center mt-5 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full px-5 gap-2">
              <h1 className="font-semibold text-gray-800 text-lg">
                Type of Order
              </h1>
              <OrderTypeButton
                selectedOrderType={selectedOrderType}
                setSelectedOrderType={setSelectedOrderType}
              />
            </div>

            <div className="mt-10 w-full h-[400px] flex items-center flex-col">
              <h1 className="font-semibold text-gray-800 text-lg  text-center border-b-2 w-1/2 py-2">
                Orders
              </h1>
              <ul className="w-3/4 h-full flex flex-col items-center gap-4 overflow-y-scroll">
                <li>
                  <OrderedItem
                    name="tae soup"
                    desc="Hot paper soup"
                    imgUrl="/noodles.svg"
                    price={100}
                    quantity={5}
                  />
                </li>
                <li>
                  <OrderedItem
                    name="tae soup"
                    desc="Hot paper soup"
                    imgUrl="/noodles.svg"
                    price={100}
                    quantity={5}
                  />
                </li>
                <li>
                  <OrderedItem
                    name="tae soup"
                    desc="Hot paper soup"
                    imgUrl="/noodles.svg"
                    price={100}
                    quantity={5}
                  />
                </li>
                <li>
                  <OrderedItem
                    name="tae soup"
                    desc="Hot paper soup"
                    imgUrl="/noodles.svg"
                    price={100}
                    quantity={5}
                  />
                </li>
                <li>
                  <OrderedItem
                    name="tae soup"
                    desc="Hot paper soup"
                    imgUrl="/noodles.svg"
                    price={100}
                    quantity={5}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center flex-col w-full mt-10 md:mt-0">
            <div className="flex flex-col items-center w-full px-5 gap-2">
              <h1 className="font-semibold text-gray-800 text-lg">
                Mode of Payment
              </h1>
              <PaymentModeButton
                selectedModeOfPayment={selectedModeOfPayment}
                setSelectedModeOfPayment={setSelectedModeOfPayment}
              />
            </div>

            <div className="flex items-center flex-col w-full mt-10">
              <h1 className="font-semibold text-gray-800 text-lg mb-1">
                Payment Summary
              </h1>
              <PaymentSummary
                totalQuantity={20}
                subtotal={2}
                discount={0}
                total={300}
              />
            </div>

            <div className="flex items-center flex-col w-full mt-10">
              <h1 className="font-semibold text-gray-800 text-lg">
                Order Summary
              </h1>
              <OrderSummary
                orderType={selectedOrderType}
                totalQuantity={20}
                modeOfPayment={selectedModeOfPayment}
                total={300}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-maroon w-[400px] mt-10 mb-5 p-2 rounded-full font-bold text-white shadow-lg transform hover:scale-105 duration-100 ease-in"
          onClick={onOpen}
        >
          Checkout
        </button>

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Finalize Order</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to finalize your order for checkout?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

export default page;
