"use client";
import React, { useState, useRef, useEffect } from "react";
import OrderTypeButton from "@/components/ordertype/OrderTypeButton";
import PaymentModeButton from "@/components/paymentmode/PaymentModeButton";
import PaymentSummary from "@/components/paymentsummary/PaymentSummary";
import OrderSummary from "@/components/ordersummary/OrderSummary";
import OrderedItem from "@/components/ordereditem/OrderedItem";
import { useCart } from "../../../context/CartContext";
import { useToast } from "@chakra-ui/react";
import QRCode from "react-qr-code";

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function generateOrderNumber(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cancelRef = useRef<HTMLButtonElement>(null);
  const [selectedOrderType, setSelectedOrderType] = useState("Dine In");
  const [selectedModeOfPayment, setSelectedModeOfPayment] = useState("Cash");
  const { cartOrders, clearCart } = useCart();
  const toast = useToast();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const generatedOrderNumber = generateOrderNumber(7);
    setOrderNumber(generatedOrderNumber);
  }, []);
  const openCheckOut = () => {
    if (cartOrders.length === 0) {
      toast({
        title: `Cart is Empty`,
        status: "warning",
        isClosable: true,
        position: "top",
        variant: "solid",
      });

      return;
    } else {
      onOpen();
    }
  };

  const handleCheckOut = () => {
    clearCart();
    onClose();
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div className="flex flex-col items-center  w-full pt-10">
        <div className="w-full text-center mt-5">
          <h1 className="font-extrabold text-2xl text-gray-800">My Cart</h1>
          <span className="font-semibold text-sm text-gray-700">
            Order Number: {orderNumber}
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
                {cartOrders.map((item) => (
                  <li key={`${item.name}-${item.price}`}>
                    <OrderedItem
                      name={item.name}
                      desc={item.description} // Replace with actual description property if available
                      imgUrl={item.imageURL} // Replace with actual image URL property if available
                      price={item.price}
                      quantity={1} // Adjust as per your logic for quantity
                    />
                  </li>
                ))}
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
          onClick={openCheckOut}
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
              <Button colorScheme="red" ml={3} onClick={handleCheckOut}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Modal isCentered onClose={onCloseModal} size="lg" isOpen={isModalOpen}>
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            // backdropInvert="80%"
            backdropBlur="2px"
          />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button onClick={onCloseModal} mr={3}>Close</Button>
              <Button variant='outline' colorScheme="orange">Save QR</Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default page;
