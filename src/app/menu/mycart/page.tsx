"use client";
import React, { useState, useRef, useEffect } from "react";
import OrderTypeButton from "@/components/ordertype/OrderTypeButton";
import PaymentModeButton from "@/components/paymentmode/PaymentModeButton";
import PaymentSummary from "@/components/paymentsummary/PaymentSummary";
import OrderSummary from "@/components/ordersummary/OrderSummary";
import OrderedItem from "@/components/ordereditem/OrderedItem";
import { useCart } from "../../../context/CartContext";
import { useToast } from "@chakra-ui/react";
import 'animate.css';

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
  ModalCloseButton,
  Image,
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
  const { cartOrders, setCartOrders, clearCart } = useCart();
  const toast = useToast();
  const [orderNumber, setOrderNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const generatedOrderNumber = generateOrderNumber(7);
    setOrderNumber(generatedOrderNumber);
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartOrders.reduce((sum, item) => sum + item.subtotal, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartOrders]);

  const openCheckOut = () => {
    // if (cartOrders.length === 0) {
    //   toast({
    //     title: `Cart is Empty`,
    //     status: "warning",
    //     isClosable: true,
    //     position: "top",
    //     variant: "solid",
    //   });
    //   return;
    // } else {
    //   onOpen();
    // }
    onOpen();
  };

  const handleCheckOut = () => {
    // clearCart();
    onClose();
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleIncrement = (index: number) => {
    const updatedOrders = [...cartOrders];
    const item = updatedOrders[index];
    item.quantity += 1;
    item.subtotal = item.quantity * item.price;
    setCartOrders(updatedOrders);
  };

  const handleDecrement = (index: number) => {
    const updatedOrders = [...cartOrders];
    const item = updatedOrders[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.subtotal = item.quantity * item.price;
      setCartOrders(updatedOrders);
    }
  };

  const handleDelete = (index: number) => {
    const updatedOrders = cartOrders.filter((_, i) => i !== index);
    setCartOrders(updatedOrders);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full pt-10">
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
              <h1 className="font-semibold text-gray-800 text-lg text-center border-b-2 w-1/2 py-2">
                Orders
              </h1>
              <ul className="w-3/4 h-full flex flex-col items-center gap-4 overflow-y-scroll">
                {cartOrders.map((item, index) => (
                  <li key={index}>
                    <OrderedItem
                      name={item.name}
                      desc={item.description}
                      imgUrl={item.imageURL} // Replace with actual image URL property if available
                      price={item.subtotal}
                      quantity={item.quantity} // Adjust as per your logic for quantity
                      onIncrement={() => handleIncrement(index)}
                      onDecrement={() => handleDecrement(index)}
                      onDelete={() => handleDelete(index)}
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
                totalQuantity={cartOrders.length}
                total={totalPrice}
              />
            </div>

            <div className="flex items-center flex-col w-full mt-10">
              <h1 className="font-semibold text-gray-800 text-lg">
                Order Summary
              </h1>
              <OrderSummary
                orderType={selectedOrderType}
                totalQuantity={cartOrders.length}
                modeOfPayment={selectedModeOfPayment}
                total={totalPrice}
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

        <Modal
          isCentered
          onClose={onCloseModal}
          size="lg"
          isOpen={isModalOpen}
          closeOnOverlayClick={false}
        >
          <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="7px" />
          <ModalContent>
            <div className="flex justify-center flex-col items-center gap-2 p-5">
              <div className="flex justify-center items-center flex-col">
                <div className="relative flex justify-center items-center w-[100px] h-[100] rounded-full bg-[#e0ffe5] animate__bounceIn">
                  <Image
                    src="/check.svg"
                    alt="check mark"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-4xl font-bold mt-2">
                  Order Successful!
                </p>
              </div>
              <p className="text-center text-sm">
                Your order has been received. Please show the QR code at the
                counter.
              </p>
              <Button colorScheme="blue" size={"sm"} className="mt-2">
                Proceed
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default page;
