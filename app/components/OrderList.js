import { Accordion } from "@chakra-ui/react";
import React from "react";
import OrderCard from "./OrderCard";

const OrderList = () => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <Accordion defaultIndex={0} allowMultiple allowToggle>
        <OrderCard />
      </Accordion>
    </div>
  );
};

export default OrderList;
