import React from "react";
import Header from "../app/components/Header";
import OrderList from "../app/components/OrderList";
const Orders = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h3 class=" text-4xl leading-8 font-extrabold mt-4 text-gray-700 my-4">
            Order History
          </h3>

          <h3 class=" text-2xl leading-8 font-extrabold text-gray-700 my-10">
            Current Orders
          </h3>
          <OrderList />

          <h3 class=" text-2xl leading-8 font-extrabold text-gray-700 my-10">
            Past Orders
          </h3>
          <OrderList />
        </div>
      </div>
    </>
  );
};

export default Orders;
