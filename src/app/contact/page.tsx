import React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <div className="main-container ml-auto mr-auto flex flex-col lg:flex-row mt-20">
      <div className="left-side flex-1 px-16 flex flex-col py-10 lg:mb-0">
        <div>
          <div className="mt-6">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <div className="py-3">
            <p className="text-gray-600 text-sm my-3">
              Email, call, or complete the form to learn how Kahayag can solve
              your inquiry
            </p>
            <p className="text-gray-600 my-2 text-sm">kahayag_ph@gmail.com</p>
            <p className="text-gray-600 text-sm">321-221-231</p>
            </div>
           
          </div>

          <div className="mt-5 flex flex-row gap-10">
            <div>
              <h1 className="font-bold">Customer Support</h1>
              <p className="text-sm">
                Our support team is available around the clock to address any
                concerns
              </p>
            </div>
            <div>
              <h1 className="font-bold">Feedback and Suggestions</h1>
              <p className="text-sm">
                We value your feedback and are continuously working to improve
                Kahayag. Your input is crucial in shaping the future of Kahayag
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side flex flex-col px-4 py-8 overflow-auto flex-1 mx-auto">
        <div className="bg-gray-100 shadow-xl rounded-xl p-5 lg:w-[600px] mx-auto">
          <h1 className="font-bold text-3xl">Get in Touch</h1>
          <p className="text-base mt-2">You can reach us anytime</p>

          <div className="flex flex-row gap-5 mt-5">
            <Input placeholder="First name" size="md" />
            <Input placeholder="Last name" size="md" />
          </div>

          <InputGroup className="mt-4">
            <InputLeftAddon>+63</InputLeftAddon>
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>

          <Textarea
            placeholder="How can we help?"
            size="lg"
            className="mt-4"
            height="150px"
          />

          <div className="mt-5">
            <Button colorScheme="blue" size="sm" width={"full"}>
              Submit
            </Button>
          </div>

          <div className="mt-2 text-center">
            <p className="text-sm">
              By contacting us, you agree to our{" "}
              <span className="font-bold">Terms of Service</span> and{" "}
              <span className="font-bold">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
