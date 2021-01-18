import React from "react";
import { Image } from "@chakra-ui/react";

const FoodCard = ({ name, price, image, location }) => {
  return (
    <li
      className="col-span-2 lg:col-span-4 bg-white rounded-bg p-4 shadow-lg"
      style={{ maxWidth: "400px" }}
    >
      <div class="space-y-4 flex">
        <div class="aspect-w-3 aspect-h-2">
          <Image
            boxSize="150px"
            objectFit="cover"
            src={image}
            alt="Segun Adebayo"
          />
        </div>

        <div class="m-4">
          <div class="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
          </div>
          <p>${price}</p>
        </div>
      </div>
    </li>
  );
};

export default FoodCard;
