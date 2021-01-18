import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import FeedItem from "./FeedItem";

const OrderCard = () => {
  return (
    <AccordionItem className="py-4">
      <AccordionButton className="focus:no-outline">
        <div className="w-full">
          <div class="flex-col items-start">
            <p class="text-lg font-medium text-gray-900">Wednesday, 18:15</p>
            <p class="text-sm text-gray-500">Foodclique</p>
          </div>
        </div>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <p className="text-lg">Order Summary</p>
        <ul className="mt-5 prose prose-indigo text-gray-500 list-disc	ml-6">
          <li>1 x Chicken Rice- $4.50</li>
          <li>1 x Teh Bing - $1.50</li>
        </ul>
        <p className="text-md mt-4">
          Total Amount : <span className="font-extrabold">$6</span>
        </p>
        <div class="flow-root py-10 px-4">
          <ul class="-mb-8">
            <FeedItem update={"Order Made"} time="18:00" />
            <FeedItem update={"Order Picked Up"} time="18:10" last={true} />
          </ul>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default OrderCard;
